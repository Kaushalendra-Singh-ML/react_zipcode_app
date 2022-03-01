import React, { useState, useEffect } from "react";
import AppDropdown from "../../components/AppDropdown/AppDropdown";
import AppInput from "../../components/AppInput/AppInput";
import AppLoader from "../../components/AppLoader/appLoader";
import AppSubmit from "../../components/AppSubmit/AppSubmit";
import AppTable from "../../components/AppTable/AppTable";
import { HeaderBackground } from "../../styles/zipcode.styled";
const static_URL = "https://api.zippopotam.us";

// Static Menu data of countries.
const static_menu = [
  {
    label: "",
    value: "",
  },
  {
    label: "India",
    value: "in",
  },
  {
    label: "USA",
    value: "us",
  },
  {
    label: "Australia",
    value: "au",
  },
  {
    label: "Canada",
    value: "ca",
  },
];

const staticLabel = [
  {
    label: "Country",
    value: "name",
  },
  {
    label: "Country Abbreviation",
    value: "abbrevation",
  },
  {
    label: "Places",
    value: "places",
  },
  {
    label: "Latitude",
    value: "latitude",
  },
  {
    label: "Longitude",
    value: "longitude",
  },
];

export default function HomeScreen() {
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [zipcodeDetail, setZipcodeDetail] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  // Getting data after submitting country and zipcode.
  const handleSubmit = () => {
    setShowLoader(true);
    fetch(`${static_URL}/${country}/${zipcode}`)
      .then((res) => res.json())
      .then((response) => {
        setZipcodeDetail(response);
        setShowLoader(false);
      });
  };

  // handle zipcode data for sending it to table component.
  const handleZipcodeDetail = () => {
    let rows = {};
    if (Object.keys(zipcodeDetail).length) {
      rows = zipcodeDetail.places.map((data) => {
        return {
          name: zipcodeDetail.country,
          abbrevation: zipcodeDetail["country abbreviation"],
          places: data["place name"],
          latitude: data.latitude,
          longitude: data.longitude,
        };
      });
    }
    return rows;
  };

  return (
    <>
      <HeaderBackground>
        <AppDropdown
          setCountry={setCountry}
          data={country}
          static_menu={static_menu}
          label="Country"
        />
        <AppInput
          data={zipcode}
          setZipcode={setZipcode}
          placeholder="Zipcode"
          type="number"
          labelName="Please Enter Zipcode"
        />
        <AppSubmit handleSubmit={handleSubmit} />
        <AppLoader loading={showLoader} />
        <AppTable data={handleZipcodeDetail()} label={staticLabel} />
      </HeaderBackground>
    </>
  );
}

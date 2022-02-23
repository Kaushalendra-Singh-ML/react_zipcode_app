import React, { useState, useEffect } from "react";
import AppDropdown from "../../components/AppDropdown/AppDropdown";
import AppInput from "../../components/AppInput/AppInput";
import AppSubmit from "../../components/AppSubmit/AppSubmit";
import AppTable from "../../components/AppTable/AppTable";
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

export default function HomeScreen() {
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [zipcodeDetail, setZipcodeDetail] = useState({});

  // Getting data after submitting country and zipcode.
  const handleSubmit = () => {
    fetch(`${static_URL}/${country}/${zipcode}`)
      .then((res) => res.json())
      .then((response) => {
        setZipcodeDetail(response);
      });
  };

  // handle zipcode data for sending it to table component.
  const handleZipcodeDetail = () => {
    console.log(zipcodeDetail);
  };

  return (
    <>
      <AppDropdown
        setCountry={setCountry}
        country={country}
        static_menu={static_menu}
      />
      <AppInput zipcode={zipcode} setZipcode={setZipcode} />
      <AppSubmit handleSubmit={handleSubmit} />
      <AppTable handleZipcodeDetail={handleZipcodeDetail} />
    </>
  );
}

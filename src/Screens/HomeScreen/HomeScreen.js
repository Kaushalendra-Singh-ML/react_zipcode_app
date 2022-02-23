import React, { useState, useEffect } from "react";
import AppDropdown from "../../components/AppDropdown/AppDropdown";
import AppInput from "../../components/AppInput/AppInput";

const static_URL = "https://api.zippopotam.us/in/282005";

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
  const [state, setState] = useState("");
  useEffect(() => {
    fetch(static_URL).then((res) => {
      setState(res);
    });
  });
  return (
    <>
      <AppDropdown static_menu={static_menu} />
      <AppInput />
    </>
  );
}

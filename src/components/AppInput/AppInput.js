import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { SetHeader } from "../../styles/zipcode.styled";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
// Can convert into generic component for input fields.
export default function Inputs(props) {
  const classes = useStyles();

  const [errorText, setErrorText] = useState("");

  const handleChange = (event) => {
    props.setZipcode(event.target.value);
    if (event.target.value.match(/^(\d{4}|\d{6})$/)) {
      setErrorText("");
    } else {
      setErrorText("Invalid format: ###-###-####");
    }
  };

  return (
    <SetHeader>
      <form className={classes.root} noValidate autoComplete="off">
        {
          <TextField
            type={props.type}
            onChange={handleChange}
            placeholder={props.Zipcode}
            id={props.data.toString()}
            errorText={errorText}
            label={props.labelName}
          />
        }
      </form>
    </SetHeader>
  );
}

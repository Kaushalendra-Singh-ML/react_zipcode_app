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
// Generic Component for Input Fields.
export default function Inputs(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setZipcode(event.target.value);
  };

  return (
    <SetHeader>
      <form className={classes.root} noValidate autoComplete="off">
        {
          <TextField
            type={props.type}
            onChange={handleChange}
            placeholder={props.placeholder}
            id={props.data.toString()}
            helperText={props.errorMsg}
            error={props.error}
            required={true}
            label={props.labelName}
          />
        }
      </form>
    </SetHeader>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { SetHeader } from "../../styles/zipcode.styled";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

// Can convert into generic component for input fields.
export default function Inputs(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    event.preventDefault();
    props.setZipcode(event.target.value);
  };

  return (
    <SetHeader>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder={props.Zipcode}
          onChange={handleChange}
          value={props.data}
          key={props.data.toString()}
          inputProps={{ "aria-label": "description" }}
        />
      </form>
    </SetHeader>
  );
}

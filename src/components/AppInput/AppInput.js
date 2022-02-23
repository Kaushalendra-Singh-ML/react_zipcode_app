import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

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
    props.setZipcode(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        placeholder="Zipcode"
        onChange={handleChange}
        value={props.zipcode}
        inputProps={{ "aria-label": "description" }}
      />
    </form>
  );
}

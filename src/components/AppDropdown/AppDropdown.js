import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// Generic Component for dropdown.
export default function SimpleSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.country}
          onChange={handleChange}
          label="Country"
        >
          {props.static_menu.map((res) => {
            return <MenuItem value={res.value}> {res.label} </MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

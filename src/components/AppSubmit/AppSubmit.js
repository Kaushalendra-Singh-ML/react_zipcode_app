import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { SetHeader } from "../../styles/zipcode.styled";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <SetHeader>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={props.handleSubmit}
          className={classes.button}
        >
          Submit
        </Button>
      </div>
    </SetHeader>
  );
}

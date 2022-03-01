import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SetHeader } from "../../styles/zipcode.styled";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function AppLoader(props) {
  const classes = useStyles();
  const { loading } = props;
  return loading ? (
    <SetHeader>
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    </SetHeader>
  ) : null;
}

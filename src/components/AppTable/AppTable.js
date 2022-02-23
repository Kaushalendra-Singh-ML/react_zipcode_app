import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(name, abbrevation, places, latitude, longitude) {
  return { name, abbrevation, places, latitude, longitude };
}

// Static data for zipcode details.
const rows = [
  createData("India", "in", "Dayalbagh", 78.0278, 78.0278),
  createData("India", "in", "NV Area", 78.0278, 78.0278),
];

// TODO: Convert it into generic table for all the components.
export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Country Abbreviation</TableCell>
            <TableCell align="right">Places</TableCell>
            <TableCell align="right">latitude</TableCell>
            <TableCell align="right">longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.abbrevation}</TableCell>
              <TableCell align="right">{row.places}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

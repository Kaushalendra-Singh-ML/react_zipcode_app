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

// Generic Table for all component.
export default function BasicTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.label.map((res) => {
              return <TableCell align="right">{res.label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(props.data).length ? (
            props.data.map((row) => (
              <TableRow key={row.places}>
                {props.label.map((res) => {
                  return <TableCell align="right">{row[res.value]}</TableCell>;
                })}
              </TableRow>
            ))
          ) : (
            <TableCell align="center">No Data</TableCell>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

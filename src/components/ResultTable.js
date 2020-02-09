import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Formatter from "./utils/Formatter";

const TableContainer = styled.div`
  table {
    th,
    td {
      color: ${props => props.theme.colors.purpleLight};
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    }
    th {
      background-color: rgba(42, 47, 67, 0.4);
    }
  }
`;

const columns = [
  { id: "header_1", label: "Distance", align: "left" },
  { id: "header_2", label: "Time", align: "right" },
  { id: "header_3", label: "Distance", align: "right" },
  { id: "header_4", label: "Time", align: "right" }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

const ResultTable = ({ pace, imperial }) => {
  const classes = useStyles();
  let distances = [];

  if (imperial) {
  } else {
    distances = [
      [
        ["300m", 0.3],
        ["5 km", 5]
      ],
      [
        ["400m", 0.4],
        ["10 km", 10]
      ],
      [
        ["800m", 0.8],
        ["Half marathon", 21.0975]
      ],
      [
        ["1000m", 1.0],
        ["Marathon", 42.195]
      ]
    ];
  }

  let rows = distances.map(d => {
    return {
      first: {
        distance: d[0][0],
        time: pace * d[0][1],
        align: "left"
      },
      second: {
        distance: d[1][0],
        time: pace * d[1][1],
        align: "right"
      }
    };
  });
  return (
    <TableContainer>
      <FormControl className={classes.container} component="fieldset">
        <FormLabel component="legend">Distances</FormLabel>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.first.distance}>
                  <TableCell align={row.first.align}>
                    <strong>{row.first.distance}</strong>
                  </TableCell>
                  <TableCell align={row.second.align}>
                    {Formatter.secondsToTimeString(row.first.time)}
                  </TableCell>
                  <TableCell align={row.second.align}>
                    <strong>{row.second.distance}</strong>
                  </TableCell>
                  <TableCell align={row.second.align}>
                    {Formatter.secondsToTimeString(row.second.time)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </FormControl>
    </TableContainer>
  );
};

ResultTable.propTypes = {
  pace: PropTypes.number.isRequired
};

export default ResultTable;

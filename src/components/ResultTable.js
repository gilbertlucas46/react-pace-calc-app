import React, { Component } from 'react';
import PropTypes from "prop-types";

import Formatter from "./utils/Formatter";


class Resulttable extends Component {
  render() {
    const { pace, imperial } = this.props;
    let distances = [];

    if (imperial) {
    } else {
      distances = [
        [["300m", 0.3], ["5 km", 5]],
        [["400m", 0.4], ["10 km", 10]],
        [["800m", 0.8], ["Half marathon", 21.0975]],
        [["1000m", 1.0], ["Marathon", 42.195]],
      ];
    }

    let rows = distances.map(d => {
      return {
        first: {
          distance: d[0][0],
          time: pace * d[0][1]
        },
        second: {
          distance: d[1][0],
          time: pace * d[1][1]
        }
      };
    });

    return (
      <div>
        <fieldset component="fieldset">
          <legend component="legend">
            Distances
          </legend>
          <table>
            <thead>
              <tr>
                <th>Distance</th>
                <th>Time</th>
                <th>Distance</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => {
                return (
                  <tr key={row.first.time}>
                    <th>
                      <strong>{row.first.distance}</strong>
                    </th>
                    <th>
                      {Formatter.secondsToTimeString(row.first.time)}
                    </th>
                    <th>
                      <strong>{row.second.distance}</strong>
                    </th>
                    <th>
                      {Formatter.secondsToTimeString(row.second.time)}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}

Resulttable.propTypes = {
  pace: PropTypes.number.isRequired,
};

export default Resulttable;

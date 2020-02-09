import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";

import Layout from './Layout';
import PaceInput from "./PaceInput";
import DistanceInput from "./DistanceInput";
import ResultTable from "./ResultTable";

import Formatter from "./utils/Formatter";

class PaceForm extends Component {
  state = {
    imperial: false,
    conversionMode: "auto",
    pace: 360,
    paceUnit: "km/h",
    distance: 10,
    distanceUnit: "km",
    time: "01:00:00"
  };

  onChange = name => event => {
    let val = event.target.value;
    this.setState(state => {
      let newState = { [name]: val };

      if ("time" === name) {
        console.log("TIME!");
        if (5 === val.length) {
          newState.time = val + ":00";
        }

        newState.pace =
          Formatter.stringToSeconds(newState.time) / state.distance;

        if ("00:00:00" === newState.time) {
          newState.pace = 360;
        }
      } else if ("distance" === name) {
        newState.pace = Formatter.stringToSeconds(state.time) / val;
      } else if ("pace" === name) {
        newState.time = Formatter.secondsToTimeString(
          state.distance * val,
          true
        );
        console.log(newState.time);
      }

      return newState;
    });
  };
  render() {
    return (
      <Layout>
        <Paper>
          <form autoComplete="off">
            <PaceInput
              value={this.state.pace}
              unit={this.state.paceUnit}
              onChangeValue={this.onChange("pace")}
              onChangeUnit={this.onChange("paceUnit")}
            />
            <DistanceInput
              distance={this.state.distance}
              distanceUnit={this.state.distanceUnit}
              time={this.state.time}
              onChangeDistance={this.onChange("distance")}
              onChangeDistanceUnit={this.onChange("distanceUnit")}
              onChangeTime={this.onChange("time")}
            />
            <ResultTable
              pace={this.state.pace}
              imperial={this.state.imperial}
            />
          </form>
        </Paper>
      </Layout>
    )
  }
}

export default PaceForm;

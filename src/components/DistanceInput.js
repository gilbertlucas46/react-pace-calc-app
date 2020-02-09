import React, { Component } from 'react';
import PropTypes from "prop-types";

import styled from 'styled-components'; 
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const DistanceContainer = styled.div`
  .inputs  {
      div, svg{
        color:  ${props => props.theme.colors.white};
      }
    }
`;

class DistanceInput extends Component {
  onChangeDistance = event => {
    this.props.onChangeDistance({
      target: {
        value:
          parseFloat(event.target.value) *
          (this.props.distanceUnit === "km" ? 1.0 : 1.60934)
      }
    });
  };

  onChangeTime = event =>
  this.props.onChangeTime({
    target: {
      value: event.target.value
    }
  });

  render() {
    const {
      distance,
      distanceUnit,
      time,
      onChangeDistanceUnit
    } = this.props;
    const { onChangeDistance, onChangeTime } = this;

    let distanceFormatted = distance;

    if (distanceUnit === "mi") {
      distanceFormatted = distanceFormatted / 1.60934;
    }

    if (distanceFormatted.toFixed(1) + "00" === distanceFormatted.toFixed(3)) {
      distanceFormatted = distanceFormatted.toFixed(1);
    } else if (
      distanceFormatted.toFixed(2) + "0" ===
      distanceFormatted.toFixed(3)
    ) {
      distanceFormatted = distanceFormatted.toFixed(2);
    } else {
      distanceFormatted = distanceFormatted.toFixed(3);
    }

    return (
      <DistanceContainer>
        <div className="contents">
          <FormControl component="fieldset" className="title">
            <FormLabel component="legend">Distance and Time</FormLabel>
            <div>
              <TextField
                type="number"
                name="distance"
                value={distanceFormatted}
                onChange={onChangeDistance}
                className="Inputs"
                inputProps={{
                  min: 0,
                  max: 300,
                  step: 0.1
                }}
              />
              <TextField
                select
                name="distanceUnit"
                value={distanceUnit}
                onChange={onChangeDistanceUnit}
                className="Inputs"
              >
                <MenuItem key="km" value="km">
                  km
                </MenuItem>
                <MenuItem key="mi" value="mi">
                  mi
                </MenuItem>
              </TextField>
              <TextField
                type="time"
                name="time"
                value={time}
                onChange={onChangeTime}
                className="Inputs"
                inputProps={{
                  step: 1,
                  required: true
                }}
              />       
            </div>
          </FormControl>
          </div>
        </DistanceContainer>
    );
  }
}

DistanceInput.propTypes = {
  distance: PropTypes.number.isRequired,
  distanceUnit: PropTypes.oneOf(["km", "mi"]).isRequired,
  onChangeDistance: PropTypes.func.isRequired,
  onChangeDistanceUnit: PropTypes.func.isRequired,
  onChangeTime: PropTypes.func.isRequired
};

export default DistanceInput;
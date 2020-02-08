import React, { Component } from 'react';
// import PropTypes from "prop-types";

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
      <div>
          <fieldset component="fieldset">
            <label component="legend">Distance and Time</label>
            <>
              <input
                type="number"
                name="distance"
                value={distanceFormatted}
                onChange={onChangeDistance}
                inputProps={{
                  min: 0,
                  max: 300,
                  step: 0.1
                }}
              />
              <input
                select
                name="distanceUnit"
                value={distanceUnit}
                onChange={onChangeDistanceUnit}
              >
                <option key="km" value="km">
                  km
                </option>
                <option key="mi" value="mi">
                  mi
                </option>
              />
              <input
                type="time"
                name="time"
                value={time}
                onChange={onChangeTime}
                inputProps={{
                  step: 1,
                  required: true
                }}
              />
             {/*
               <TimeInput
                input={<TextField />}
              />
            */}
            />
        </fieldset>
      </div>
    );
  }
}

// DistanceInput.propTypes = {
//   distance: PropTypes.number.isRequired,
//   distanceUnit: PropTypes.oneOf(["km", "mi"]).isRequired,
//   onChangeDistance: PropTypes.func.isRequired,
//   onChangeDistanceUnit: PropTypes.func.isRequired,
//   onChangeTime: PropTypes.func.isRequired
// };

export default DistanceInput;
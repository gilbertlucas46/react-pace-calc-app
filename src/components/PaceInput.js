import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Slider } from "@material-ui/core";
import Formatter from "./utils/Formatter";
import paceUnits from "./utils/PaceUnits";


export const InputsContainer = styled.div`
  .contents {
    .paces {
      @media (min-width: 767px) {
        > div {
          position: relative;
          font-size: .6em;
          &:after {
            content: '';
            width: 1px;
            height: 15px;
            background-color: ${props => props.theme.colors.sea};
            display: block;
            position: absolute;
            top: 0;
            right: -1.6em;
            bottom: 0;
            margin: auto;
            transform: rotate3d(1,1,1,45deg);
          }
          &:last-of-type {
              &:after {
                display: none;
              }
            }
        }
      }
    }
  }
`;

const BoxShadow = "0 3px 1px rgba(0,0,0,0.1)";

const RangeSLider = withStyles({
  root: {
    color: "#4b5373",
    height: 8,
    margin: "20px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: BoxShadow,
    marginTop: -14,
    marginLeft: -14,
    borderRadius: "30%",
    "&:focus,&:hover,&$active": {
      boxShadow: "0 0 0 5px rgba(0, 0, 0, 0.1)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: BoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    borderRadius: 4
  },
  rail: {
    borderRadius: 4
  }
})(Slider);

class PaceInput extends Component {
  getUnitObject = u => {
    const { unit } = this.props;
    let unitToCompare = u || unit;

    return paceUnits.find(v => v.name === unitToCompare);
  };
  onChangeValueInUnit = event => {
    this.props.onChangeValue({
      target: { value: this.getUnitObject().toSecondsPerKm(event.target.value) }
    });
  };
  onChangeSlider = (event, value) => {
    this.onChangeValueInUnit({
      target: {
        value: this.fromSliderValue(this.getUnitObject(), value)
      }
    });
  };
  toSliderValue = (unit, value) => {
    return (
      (this.getUnitObject("km/h").fromSecondsPerKm(unit.toSecondsPerKm(value)) -
        1.0) /
      0.05
    );
  };
  fromSliderValue = (unit, value) => {
    return (
      Math.round(
        this.getUnitObject().fromSecondsPerKm(
          this.getUnitObject("km/h").toSecondsPerKm(1.0 + value * 0.05)
        ) * 100
      ) / 100
    );
  };
  render() {
    const { value, unit, onChangeUnit } = this.props;
    let unitObject = this.getUnitObject();
    let valueInUnit = unitObject.fromSecondsPerKm(value);
    const valueSlider = roundTo(this.toSliderValue(unitObject, valueInUnit), 2);

    function roundTo(n, digits) {
      if (digits === undefined) {
        digits = 0;
      }

      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      var test = Math.round(n) / multiplicator;
      return +test.toFixed(digits);
    }

    if (valueInUnit.toFixed) {
      valueInUnit = valueInUnit.toFixed(unitObject.precision);
    }

    return (
      <InputsContainer>
        <div className="contents">
          <FormControl component="fieldset" className="title">
            <FormLabel component="legend">Pace</FormLabel>
            <div>
              <TextField
                type="number"
                name="pace"
                value={valueInUnit}
                onChange={this.onChangeValueInUnit}
                className="Inputs"
                inputProps={{
                  min: unitObject.min,
                  max: unitObject.max,
                  step: Math.pow(10, -unitObject.precision)
                }}
              />
              {(console.log(unit, valueInUnit))}
              <TextField
                select
                name="paceUnit"
                value={unit}
                onChange={onChangeUnit}
                className="Inputs"
              >
                {paceUnits.map(option => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <RangeSLider
              value={valueSlider}
              min={0}
              max={600}
              step={1}
              onChange={this.onChangeSlider}
            />
          </FormControl>
        </div>
        <div className="contents">
          <div className="paces">
            {(() => {
              if (true) {
                return paceUnits.map(unit => (
                  <div key={unit.name}>
                    {Formatter.formatUnit(unit, value)}{" "}
                    <small>{unit.name}</small>
                  </div>
                ));
              }
            })()}
          </div>
        </div>
      </InputsContainer>
    );
  }
}

PaceInput.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(paceUnits.map(v => v.name)).isRequired,
  onChangeUnit: PropTypes.func.isRequired
};

export default PaceInput;

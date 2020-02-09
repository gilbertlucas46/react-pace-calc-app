import React from 'react';
import PropTypes from "prop-types";

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Slider } from '@material-ui/core';

import Formatter from "./utils/Formatter";
import paceUnits from "./utils/PaceUnits";


const PaceInputContainer = styled.div`
  .contents {
    display: flex;
  }
`;

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const RangeSLider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    borderRadius: 4,
  },
  rail: {
    borderRadius: 4,
  },
})(Slider);

class PaceInput extends React.Component {
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
      var test =(Math.round(n) / multiplicator);
      return +(test.toFixed(digits));
    }

    if (valueInUnit.toFixed) {
      valueInUnit = valueInUnit.toFixed(unitObject.precision);
    }

    return (
      <PaceInputContainer>
        <div className="contents">
          <FormControl component="fieldset">
            <FormLabel component="legend">Pace</FormLabel>
            <div>
              <TextField
                type="number"
                name="pace"
                value={valueInUnit}
                onChange={this.onChangeValueInUnit}
                inputProps={{
                  min: unitObject.min,
                  max: unitObject.max,
                  step: Math.pow(10, -unitObject.precision)
                }}
              />
              <TextField
                select
                name="paceUnit"
                value={unit}
                onChange={onChangeUnit}
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
          {(() => {
            if (true) {
              return paceUnits.map(unit => (
                <div key={unit.name}>
                  {Formatter.formatUnit(unit, value)} <small>{unit.name}</small>
                </div>
              ));
            }
          })()}
        </div>
      </PaceInputContainer>
    );
  }
}

PaceInput.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(paceUnits.map(v => v.name)).isRequired,
  onChangeUnit: PropTypes.func.isRequired
};

export default PaceInput;
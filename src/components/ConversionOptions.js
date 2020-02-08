import React, { Component } from 'react';
import PropTypes from "prop-types";

class ConversionOptions extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <fieldset component="fieldset">
          <label component="legend">Mode</label>
          <div
            aria-label="Mode"
            name="mode"
            value={value}
            onChange={onChange}
            row
          >
            <input
              value="auto"
              control={<Radio color="primary" />}
              label="automatically"
            />
            <label
              label="or"
            />
            <input
              value="byPace"
              control={<Radio color="primary" />}
              label="by Pace"
            />
            <label
              label="or"
            />
            <input
              value="byDistanceAndTime"
              control={<Radio color="primary" />}
              label="by Distance and Time"
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

ConversionOptions.propTypes = {
  value: PropTypes.oneOf(["auto", "byPace", "byDistanceAndTime"]).isRequired,
  onChange: PropTypes.func.isRequired
};


export default ConversionOptions;

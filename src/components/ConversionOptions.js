import React from 'react';

export const ConversionOptions = () => {
  const { classes, value, onChange } = this.props;
  return (
    <div>
      <fieldset>
        <legend>Mode</legend>
        <label>
          automatically
          <input name="mode" type="radio" checked=""/>
        </label>
        <label>
          by Pace
          <input name="mode" type="radio" checked=""/>
        </label>
        <label>
          By Distance
          <input name="mode" type="radio" checked=""/>
        </label>
      </fieldset>
    </div>
  )
}

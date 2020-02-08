import React, { Component } from 'react'
import styled from 'styled-components';
import ConversionOptions from './ConversionOptions';

const Form = styled.form`

`;

export default class PaceForm extends Component {
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
  };
  render() {
    return (
      <Form noValidate autoComplete="off">
          <ConversionOptions
            value={this.state.conversionMode}
            onChange={onChange()}
          />
          <fieldset>
            <legend>Pace</legend>
            <div className="inputContainer">
              <input aria-invalid="false" name="pace" type="number"/>
            </div>
          </fieldset>
          <fieldset>
            <legend>Distance and Time</legend>
            <div className="inputContainer">
            <input aria-invalid="false" name="distance" type="number" />
            </div>
          </fieldset>
          <fieldset>
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
                <tr>
                <td>0:36</td>
                <td><strong>2 km</strong></td>
                <td><strong>100m</strong></td>
                <td>12:00</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
      </Form>
    )
  }
}


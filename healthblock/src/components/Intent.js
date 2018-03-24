import React, { Component } from 'react';
import {Line} from 'rc-progress';

export default class Intent extends Component {
  render() {
    return (
      <div style={{flexDirection: 'column', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400, height: 310, margin: 10}}>
        <div style={{padding: 20, flexDirection: 'column', display: 'flex', width: 360}}>
        <text style={{padding: 10}}>$20000 towards Influenza Vaccinations.</text>
        <text style={{fontSize: 15, padding: 10}}>Due to an increase of flu contaminated zones, we want to purchase an additional supply of immunization treatments. Full lump sum will go towards a bulk order purchase from DVCare Pharma.</text>
      <Line style={{margin: 16, marginLeft: 10, maxWidth: 368}}percent="79" strokeWidth="3" />
    <text style={{marginRight: 32, fontSize: 14, textAlign: 'right'}}> 79% Approval</text>
</div>
  <button style={{width: '100%', float: 'right', marginTop: 10, padding: 10, color: 'green'}}>Retrieve Funds</button>

    </div>
    );
  }
}

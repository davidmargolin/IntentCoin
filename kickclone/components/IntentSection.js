import React, { Component } from 'react';
import Intent from './Intent'

export default class IntentSection extends Component {
  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 20}}>
        {this.props.intents.map((intent)=><Intent/>)}
        <div style={{flexDirection: 'column', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400, margin: 10}}>
          <div style={{padding: 20, flexDirection: 'column', display: 'flex', width: 360}}>
          <text style={{padding: 10}}>$20000 towards Influenza Vaccinations.</text>
          <text style={{fontSize: 15, padding: 10}}>Due to an increase of flu contaminated zones, we want to purchase an additional supply of immunization treatments. Full lump sum will go towards a bulk order purchase from DVCare Pharma.</text>
          <Line style={{margin: 16, marginLeft: 10, maxWidth: 368}}percent="79" strokeWidth="3" />
          <text style={{marginRight: 32, fontSize: 14, textAlign: 'right'}}> 79% Approval</text>
        </div>
      </div>
      </div>
    );
  }
}

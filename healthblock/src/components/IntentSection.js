import React, { Component } from 'react';
import Intent from './Intent'
import add from '../photos/add.png'
export default class IntentSection extends Component {
  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 20}}>
        {this.props.intents.map((intent)=><Intent/>)}
        <div style={{flexDirection:'column',textAlign: 'center',justifyContent: 'center',alignItems: 'center', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400,height: 310, margin: 10}}>
        <img src={add} style={{padding: 15, width: 65, height: 65}}/>
      Add New Intent
      </div>
      </div>
    );
  }
}

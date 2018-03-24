import React, { Component } from 'react';
import {Line} from 'rc-progress';

export default class Intent extends Component {

  render() {
    let approved = false
    let approval = ((this.props.intent.approvals/this.props.total_contributors)*100).toFixed(0)
    if (approval >= 66){
      approved = true
    }
    return (
      <div style={{flexDirection: 'column', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400, height: 310, margin: 20}}>
        <div style={{padding: 20, flexDirection: 'column', display: 'flex', width: 360, height: 210}}>
          <text style={{padding: 10}}>{this.props.intent.amount_dollars} towards {this.props.intent.goal_name}</text>
          <text style={{fontSize: 15, padding: 10}}>{this.props.intent.goal_desc}</text>
          <Line style={{margin: 16, marginLeft: 10, maxWidth: 368}}percent={(this.props.intent.approvals/this.props.total_contributors)*100} strokeWidth="3" />
          <text style={{marginRight: 32, fontSize: 14, textAlign: 'right'}}> {((this.props.intent.approvals/this.props.total_contributors)*100).toFixed(0)}% Approval</text>
        </div>
        <button style={{width: '100%', float: 'right', marginTop: 10, padding: 10, color: approved? 'green': 'red'}} disabled={!approved}> Retrieve Funds</button>
      </div>
    );
  }
}

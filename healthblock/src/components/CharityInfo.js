import React, { Component } from 'react';
import CardSection from './CardSection'

export default class CharityInfo extends Component {
  render() {
    return (
      <div style={{padding: 40, flexDirection: 'row', display:'flex', maxWidth: 1200 }}>
        <img  style={{width: 200}}src={this.props.charity.profile_picture}/>
      <div style={{flexDirection:'column', alignSelf: 'center', display: 'flex', marginLeft: 20, }}>
          <text style={{paddingLeft: 8, fontSize: 15}}>{this.props.charity.name}</text>
        <text style={{fontSize: 12, padding: 8}}>{this.props.charity.bio}</text>
        </div>
      </div>
    );
  }
}

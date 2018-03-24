import React, { Component } from 'react';
import CardSection from './CardSection'

export default class CharityInfo extends Component {
  render() {
    return (
      <div style={{padding: 40, flexDirection: 'row', display:'flex', flexWrap: 'wrap'}}>
        <img  style={{maxWidth: 250, maxHeight: 250, width: 'auto', height: 'auto', }}src={this.props.charity.profile_picture}/>
      <div style={{flexDirection:'column', alignSelf: 'center', display: 'flex', paddingLeft: 20, maxWidth: 800}}>
          <text style={{paddingLeft: 8, fontSize: 18}}>{this.props.charity.name}</text>
        <text style={{fontSize: 14, padding: 8}}>{this.props.charity.bio}</text>
        </div>
      </div>
    );
  }
}

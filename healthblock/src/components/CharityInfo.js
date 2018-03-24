import React, { Component } from 'react';
import CardSection from './CardSection'

export default class CharityInfo extends Component {
  render() {
    return (
      <div style={{padding: 20, flexDirection: 'row', width: '100%', display:'flex'}}>
        <img  style={{width: 200}}src={this.props.profile_image}/>
      <div style={{flexDirection:'column', alignSelf: 'flex-end', display: 'flex', }}>
          <text style={{paddingLeft: 8, fontSize: 15}}> American Cancer Society </text>
        <text style={{fontSize: 12, padding: 8}}>At the American Cancer Society, we're on a mission to free the world from cancer. Until we do, we'll be funding and conducting research, sharing expert information, supporting patients, and spreading the word about prevention. All so you can live longer — and better.</text>
        </div>
      </div>
    );
  }
}

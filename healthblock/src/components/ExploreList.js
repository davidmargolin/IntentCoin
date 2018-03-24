import React, { Component } from 'react';
import CardSection from './CardSection'

export default class ExploreList extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <CardSection title="Education"/>
        <CardSection title="Health"/>
        <CardSection title="Environment"/>


      </div>
    );
  }
}

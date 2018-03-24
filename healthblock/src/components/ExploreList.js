import React, { Component } from 'react';
import CardSection from './CardSection'

export default class ExploreList extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <CardSection image_list={this.props.environment} title="Environment"/>
        <CardSection image_list={this.props.health} title="Health"/>

      <CardSection image_list={this.props.education} title="Policy"/>
      </div>
    );
  }
}

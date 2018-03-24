import React, { Component } from 'react';
import Card from './Card'

export default class CardSection extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <h2 style={{margin: 20, color: '#6A6FEA'}}> {this.props.title}</h2>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <Card/>
          <Card/>
          <Card/>
        <div style={{textAlign: 'center',width: 270, height: 195}}>
            See More
        </div>
      </div>
    </div>
    );
  }
}

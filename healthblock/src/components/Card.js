import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div style={{width: 220, backgroundColor: 'white', height: 165,boxShadow: "1px 1px 4px #cEcEcE", borderRadius: 6, margin: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <img src={this.props.image} style={{alignSelf: 'center', maxWidth:'100%', maxHeight:'100%'}} />
      </div>
    );
  }
}

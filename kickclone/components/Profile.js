import React, { Component } from 'react';
import Card from './Card'
export default class Profile extends Component {
  render() {
    return (
      <div style={{borderRightWidth: 0.5, borderRightColor: 'lightgray', borderRightStyle: 'solid'}}>
        <div style={{height: 110, width: 400, backgroundColor: '#6A6FEA'}}>
          <div style={{position: 'relative', top: 20, left: 25, width: 320, display: 'flex'}}>
          <img src="https://cdn.technologyreview.com/i/images/SO15MITKendall.timrowex299.jpg?sw=280" style={{width: 70, height: 70, borderRadius: 100}}/>
        <div style={{flexDirection: 'column', marginLeft: 15, justifyContent: 'center', display: 'flex'}}>
          <t style={{fontSize: 20, color:'white', padding: 2}}>David Margolin</t>
        <t style={{fontSize: 12, color:'white', padding:2}}>davidmargolin0305@gmail.com</t>
        </div>
      </div>
      </div>
      <h2 style={{margin: 20, color: '#6A6FEA'}}>Your Projects</h2>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    );
  }
}

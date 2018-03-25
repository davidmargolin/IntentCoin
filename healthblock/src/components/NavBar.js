import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import money from '../photos/index.png'

export default class NavBar extends Component{
  render() {
    return (
    <div style={{width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', boxShadow: '1px 1px 1px #cEcEcE'}}>
      <div style={{backgroundColor: 'white', display:'flex', flexDirection: 'row', alignItems: 'center', flex:1}} >
        <Link to="/"style={{textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'row'}}>
      <h2 style={{flex:1, margin: 20, color: '#6A6FEA'}}>Intention</h2></Link>
    <input type="text" placeholder="Search Causes..." style={{height: 30,flex:1,borderradius: 0,maxWidth: 800, fontSize: 15,padding: 8,margin: 20}}/>
      </div>
        <button style={{width: 150,padding: 6, marginRight: 24, color: '#6A6FEA', fontSize: '12'}} href = "/">List Your Cause</button>
    </div>
)
}
}

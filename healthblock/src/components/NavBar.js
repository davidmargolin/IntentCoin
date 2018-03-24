import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class NavBar extends Component{
  render() {
    return (
    <div style={{width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', boxShadow: '1px 1px 1px #cEcEcE'}}>
      <div style={{backgroundColor: 'white', display:'flex', flexDirection: 'row', alignItems: 'center'}} >
        <Link to="/"style={{textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img style={{borderRadius: '50%', margin: 20, width: 40, height:40, borderRadius: 5}} src = "https://i.pinimg.com/originals/3c/eb/9a/3ceb9ae6a1040db7fe5b5f35fcd05aac.jpg"/>
      <h2 style={{width: 340, marginLeft: 20}}>CharityBlock</h2></Link>
        <input type="text" placeholder="Search Charities..." style={{height: 30,width: 400,borderradius: 0,fontSize: 18,padding: 8,}}/>
      </div>
        <button style={{padding: 8, margin: 16, color: '#6A6FEA'}} href = "/">Make a project</button>
    </div>
)
}
}

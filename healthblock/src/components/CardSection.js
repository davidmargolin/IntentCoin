import React, { Component } from 'react';
import Card from './Card'
import {Link} from 'react-router-dom'
export default class CardSection extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <h2 style={{marginLeft: 30}}> {this.props.title}</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.props.image_list.map((item,index)=><Link to={"/"+this.props.title+"/"+index+"/"+item['name']}><Card image={item['profile_picture']}/></Link>)}
          <div style={{width: 220, backgroundColor: 'white', height: 165,boxShadow: "1px 1px 4px #cEcEcE", borderRadius: 6, margin: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20}}>
            <text style={{color: '#6A6FEA', fontSize: 16, fontWeight: 'bold'}}>See More</text>
          </div>

      </div>
    </div>
    );
  }
}

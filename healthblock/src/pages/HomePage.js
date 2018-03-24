import React, { Component } from 'react'
import * as firebase from 'firebase'
import ExploreList from "../components/ExploreList"
import Profile from "../components/Profile"
class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      health: [],
      edu: [],
      env: []
    }
  }
  componentWillMount(){
    let health_list = []
    firebase.database().ref('Health').once('value', (snapshot)=> {
      snapshot.forEach((childSnapshot)=> {
        let childData = childSnapshot.val();
        health_list.push(childData)
        this.setState({health: health_list})
      });
    });
    let edu_list = []
    firebase.database().ref('Policy').once('value', (snapshot)=> {
      snapshot.forEach((childSnapshot)=> {
        let childData = childSnapshot.val();
        edu_list.push(childData)
        this.setState({edu: edu_list})
      });
    });
    let env_list = []
    firebase.database().ref('Environment').once('value', (snapshot)=> {
      snapshot.forEach((childSnapshot)=> {
        let childData = childSnapshot.val();
        env_list.push(childData)
        this.setState({env: env_list})
      });
    });
  }
  render() {
    return (


        <div>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          <Profile />

          <ExploreList education={this.state.edu} environment={this.state.env} health={this.state.health} style={{margin: 'auto', display:'flex'}}/>

        </div>

        </div>

    );
  }
}

export default HomePage;

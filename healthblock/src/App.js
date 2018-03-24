import React, { Component } from 'react'
import * as firebase from 'firebase'
import HomePage from './pages/HomePage'
import CharityPage from './pages/CharityPage'
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      health: [],
      edu: [],
      env: []
    }
  }
  componentWillMount(){
    let config = {
      apiKey: "AIzaSyDhAV5hjYWpyG-9YnCMq9XgVFON27o6SpE",
      authDomain: "wombat-344c7.firebaseapp.com",
      databaseURL: "https://wombat-344c7.firebaseio.com",
      projectId: "wombat-344c7",
      storageBucket: "wombat-344c7.appspot.com",
      messagingSenderId: "97936250813"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Route exact path="/" component={HomePage}/>
        <Route path="/:category/:index/:name" component={CharityPage}/>
    </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

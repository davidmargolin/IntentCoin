import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import ExploreList from "./components/ExploreList"
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <div>
        <ExploreList />
    </div>

      </div>
    );
  }
}

export default App;

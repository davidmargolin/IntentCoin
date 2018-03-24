import React, { Component } from 'react';
import '../App.css'

export default class NavBar extends Component{
  render() {
    return (
  <div>
    <div className="Nav-Bar">
      <div className="NavLeft">
      <img className="Logo" src = "https://i.pinimg.com/originals/3c/eb/9a/3ceb9ae6a1040db7fe5b5f35fcd05aac.jpg">
      </img>
      <h1 className="Name">
        CharityBlock
      </h1>
      <input type="text" placeholder="Search Charities..." className="search-bar"/>
      </div>
      <ul className="project-button">
        <li><a href = "">Make a project</a></li>
      </ul>
    </div>
  </div>
)
}
}

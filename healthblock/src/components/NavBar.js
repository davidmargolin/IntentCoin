import React, { Component } from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

export default class NavBar extends Component{
  render() {
    return (
    <div className="Nav-Bar">
      <div className="NavLeft">
      <Link to="/"><img className="Logo" src = "https://i.pinimg.com/originals/3c/eb/9a/3ceb9ae6a1040db7fe5b5f35fcd05aac.jpg">
    </img> </Link>
  <Link to="/" ><h1 className="Name">
        CharityBlock
      </h1></Link>
      <input type="text" placeholder="Search Charities..." className="search-bar"/>
      </div>
      <ul className="project-button">
        <button><a href = "">Make a project</a></button>
      </ul>
    </div>
)
}
}

import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarHorizontal extends Component {
  constructor(props){
    super(props);

    albumType: ''
  }
  render(){
    return(
      <Grid>
        <hr className="style15"/>
        <ul className="navbar-wrapper">
          <Link to="/home">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/gallery">
            <li className="nav-item travel-drop">Travel</li>
          </Link>
          <Link to="/gallery">
            <li className="nav-item">Sunsets</li>
          </Link>
          <Link to="/gallery">
            <li className="nav-item">Friends</li>
          </Link>
          <Link to="/about-me">
            <li className="nav-item">About Me</li>
          </Link>
        </ul>
      </Grid>
    );
  }
}

export default NavbarHorizontal;

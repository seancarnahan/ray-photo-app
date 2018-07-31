import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
          <li className="nav-item">Home</li>
          <li className="nav-item travel-drop">Travel</li>
          <li className="nav-item">Sunsets</li>
          <li className="nav-item">Friends</li>
          <li className="nav-item">About Me</li>
        </ul>
      </Grid>

    );
  }
}

export default NavbarHorizontal;

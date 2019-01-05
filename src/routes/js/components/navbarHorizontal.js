import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RoutedDropdown from './routedDropdown.js';

class NavbarHorizontal extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <Grid>
        <hr className="style15"/>
        <ul className="navbar-wrapper">
          <Link to={{
             pathname: '/home',
             state: {selectedPage: 'home'}
          }}>
            <li className="nav-item">Home</li>
          </Link>
          <li className="nav-item">
            <RoutedDropdown/>
          </li>
          <Link to={{
             pathname: "/sunsets",
             state: {selectedPage: 'sunsets'}
          }}>
            <li className="nav-item">Sunsets</li>
          </Link>
          <Link to={{
            pathname: "/friends",
            state: {selectedPage: 'friends'}
          }}>
            <li className="nav-item">Friends</li>
          </Link>
          <Link to={{
            pathname: "/about-me",
            state: {selectedPage: 'about-me'}
          }}>
            <li className="nav-item">About Me</li>
          </Link>
        </ul>
      </Grid>
    );
  }
}

export default NavbarHorizontal;

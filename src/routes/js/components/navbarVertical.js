import React from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RoutedDropdown from './routedDropdown.js';

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);


  }
  render(){
    return(
      <Grid>
        <ul className="vertical-navbar_wrapper">
          <Link to={{
             pathname: '/home',
             state: {selectedPage: 'home'}
          }}>
            <li className="vertical-nav_item">Home</li>
          </Link>
          <li className="vertical-nav_item">
            <RoutedDropdown/>
          </li>
          <Link to={{
             pathname: "/sunsets",
             state: {selectedPage: 'sunsets'}
          }}>
            <li className="vertical-nav_item">Sunsets</li>
          </Link>
          <Link to={{
            pathname: "/friends",
            state: {selectedPage: 'friends'}
          }}>
            <li className="vertical-nav_item">Friends</li>
          </Link>
          <Link to={{
            pathname: "/about-me",
            state: {selectedPage: 'about-me'}
          }}>
            <li className="vertical-nav_item">About Me</li>
          </Link>
        </ul>
      </Grid>

    );
  }
}
export default SideNavPage;

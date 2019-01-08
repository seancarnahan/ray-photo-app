import React from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RoutedDropdown from './routedDropdown.js';

class NavbarVertical extends React.Component {
  constructor(props) {
    super(props);


  }
  render(){
    return(
        <ul className="vertical-navbar_wrapper">
          <hr className="style15"/>
          <Link to={{
             pathname: '/home',
             state: {selectedPage: 'home'}
          }}>
            <li className="vertical-nav_item">Home</li>
          </Link>
          <li className="vertical-nav_dropdown"><RoutedDropdown/></li>
          <Link to={{
             pathname: "/sunsets",
             state: {selectedPage: 'sunsets'}
          }}>
            <li className="vertical-nav_item-sunsets">Sunsets</li>
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
          <li className="vertical-nav_item">
            <address className="vertical-nav_item-email">
              Email: <a className="vertical-nav_item-email-address" href="mailto:rhadnett@gmail.com">Rhadnett@gmail.com</a>
            </address>
          </li>
          <li className="vertical-nav_item">Phone: (424) 241-9249</li>
        </ul>
    );
  }
}
export default NavbarVertical;

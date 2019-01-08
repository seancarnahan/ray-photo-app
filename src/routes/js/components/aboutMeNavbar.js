import React, {Component} from 'react';
import {Grid, Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AboutMeNavbar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Ray Hadnett Photography </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/travel/bigsur" to="/travel/bigsur">
              Travel
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/sunsets" to="/sunsets">
              Sunsets
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/friends" to="/friends" >
              Friends
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/about-me" to="/about-me" >
              About Me
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AboutMeNavbar;

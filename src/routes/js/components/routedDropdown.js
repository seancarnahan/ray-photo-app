import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const RoutedDropdown = () => {
  return (
    <Nav>
      <NavDropdown eventKey={3} title="Travel" id="basic-nav-dropdown">
        <LinkContainer to="/travel/bigsur" className="nav_drop-item">
          <MenuItem eventKey={3.1}>Big Sur</MenuItem>
        </LinkContainer>
        <LinkContainer to="/travel/seattle" className="nav_drop-item">
          <MenuItem eventKey={3.2}>Seattle</MenuItem>
        </LinkContainer>
        <LinkContainer to="/travel/london" className="nav_drop-item">
          <MenuItem eventKey={3.3} >London</MenuItem>
        </LinkContainer>
        <LinkContainer to="/travel/southbay" className="nav_drop-item">
          <MenuItem eventKey={3.4} >South Bay</MenuItem>
        </LinkContainer>
      </NavDropdown>
    </Nav>
  );
};

export default RoutedDropdown;

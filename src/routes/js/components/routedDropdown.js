import React, { Component } from 'react';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const RoutedDropdown = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        Travel
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Big Sur</MDBDropdownItem>
        <MDBDropdownItem>Seattle</MDBDropdownItem>
        <MDBDropdownItem>London</MDBDropdownItem>
        <MDBDropdownItem>South Bay</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};
<NavLink to="/link_to_somewhere">
     <DropdownItem>Link</DropdownItem>
   </NavLink>

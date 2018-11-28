import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink, Container, Row } from 'mdbreact';

//https://mdbootstrap.com/react/advanced/sidenav/
class SideNavPage extends React.Component {
  constructor(props) {
    super(props);


  }
  render(){
    return(
      <div className="container">
        <h1>
          Testing sidebar nav location
        </h1>
      </div>    
    );
  }
}
export default SideNavPage;

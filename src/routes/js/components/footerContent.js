import React, { Component } from 'react';
import { Container } from "mdbreact";

const FooterContent = () => {
  return (
    <div className="footer_panel-container">
      <div className="footer_panel-header"></div>
      <div className="footer_panel-footer">
        <div className="footer-copyright text-center py-3">
          <Container className="footer_panel-footer-legal" fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.RayHadnettPhotography"> RayHadnettPhotography.com </a>
          </Container>
        </div>
      </div>
    </div>

  );
};



export default FooterContent;

import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TitleHeader from './titleHeader.js';
import SideNavPage from './navbarVertical.js';
import GalleryViewer from './galleryViewer.js';

class GalleryModel extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="gallery__wrapper">
        <TitleHeader/>
        <Row className="album-header__container">
          <Col xs={6} md={4}/>
          <Col xs={12} md={8}>
            <h1 className="album-header__default">
              {this.props.albumType}
            </h1>
          </Col>
        </Row>
        <Row className="grid-size">
          <Col xs={4} md={1} className="vertical-navbar__wrapper">
            <SideNavPage/>
          </Col>
          <Col xs={12} md={12} className="photo-gallery__container">
            <GalleryViewer albumType={this.props.albumType}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GalleryModel;

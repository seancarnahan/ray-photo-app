import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TitleHeader from './../titleHeader.jsx';
import SideNavPage from './../navbarVertical.jsx';

class Gallery extends Component {
  constructor(props){
    super(props);

    this.state = { albumType: '' };
  }

  componentDidMount() {
    const {selectedPage} = this.props.location.state;

    if (selectedPage !== 'undefined') {
      this.setState({
        albumType: selectedPage
      });
    }
  }


  render(){
    return(
      <div className="gallery__wrapper">
        <TitleHeader/>
        <Row className="album-header__container">
          <Col xs={6} md={4}/>
          <Col xs={12} md={8}>
            <h1 className="album-header__default">
              {this.state.albumType}
            </h1>
          </Col>
        </Row>
        <Row className="grid-size">
          <Col xs={6} md={4} className="vertical-navabr__wrapper">
            <SideNavPage/>
          </Col>
          <Col xs={12} md={8} className="photo-gallery__container"/>
        </Row>
      </div>
    );
  }
}

export default Gallery;

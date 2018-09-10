import React,{Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import TitleHeader from './../titleHeader.jsx';

class Gallery extends Component {
  constructor(props){
    super(props);

    this.state = { currentPage: '' };
  }

  componentdidMount() {
    const {selectedPage} = props.location.state;
    console.log(selectedPage);

    this.setState({
      currentPage: selectedPage
    });
  }

  render() {
    return(
      <div className="gallery__wrapper">
        <TitleHeader/>
        <Row>
          <Col xs={6} md={4}/>
          <Col xs={12} md={8}>
            <h1 className="sub-header__default">
              Foo
            </h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4} className="vertical-navabr__wrapper"/>
          <Col xs={12} md={8} className="photo-gallery__container"/>
        </Row>
      </div>
    );
  }
}

export default Gallery;

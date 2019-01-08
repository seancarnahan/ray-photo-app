import React, {Component} from 'react';
import {Carousel, Grid, Image} from 'react-bootstrap';

export default class GalleryViewer extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <Grid>
        <Carousel className="carousel-wrapper">
          <Carousel.Item>
            <Image alt="cant find image 1" src="assets/featured-photos/fp__photo1.jpg" responsive/>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="cant find image 1" src="assets/featured-photos/fp__photo2.jpg" responsive/>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="cant find image 1" src="assets/featured-photos/fp__photo3.jpg" responsive/>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="cant find image 1" src="assets/featured-photos/fp__photo4.jpg" responsive/>
          </Carousel.Item>
        </Carousel>
      </Grid>
    );
  }

}

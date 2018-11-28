import React from 'react';
import {Carousel, Grid, Image} from 'react-bootstrap';

const FeaturedPhotoViewer = () => {
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
};

export default FeaturedPhotoViewer;

import React, {Component} from 'react';
import {Carousel, Grid, Image} from 'react-bootstrap';


export default class GalleryViewer extends Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const albumDirectory = "cd ./../../../../build/assets/photos/Friends || exit; ls -d -- */ | grep 'page-*' | wc -l";
  }

  render(){

    return (
      <div >
        <Image className="photo-sizing_box" alt="cant find image 1" src="assets/featured-photos/fp__photo4.jpg"/>
        <a>
        </a>
      </div>

    );
  }

}

import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class Sunsets extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'sunsets' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default Sunsets;

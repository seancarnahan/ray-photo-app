import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class BigSur extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'big sur' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default BigSur;

import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class London extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'london' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default London;

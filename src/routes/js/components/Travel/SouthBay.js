import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class SouthBay extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'south bay' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default SouthBay;

import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class Seattle extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'seattle' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default Seattle;

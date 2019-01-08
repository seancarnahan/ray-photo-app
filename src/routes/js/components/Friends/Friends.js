import React, {Component} from 'react';

import GalleryModel from './../galleryModel.js'

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = { albumType: 'friends' };
  }

  render() {
    return (
      <GalleryModel albumType={this.state.albumType} />
    );
  }
}

export default Friends;

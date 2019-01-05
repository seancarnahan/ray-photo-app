import React,{Component} from 'react';

import TitleHeader from './../titleHeader.js';
import FeaturedPhotoViewer from './../featuredPhotoViewer.js';
import NavbarHorizontal from './../navbarHorizontal.js';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <TitleHeader/>
        <br/>
        <NavbarHorizontal/>
        <FeaturedPhotoViewer/>
      </div>
    );
  }
}

export default Home;

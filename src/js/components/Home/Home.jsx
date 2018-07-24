import React,{Component} from 'react';

import TitleHeader from './../titleHeader.jsx';
import FeaturedPhotoViewer from './../featuredPhotoViewer.jsx';
import NavbarHorizontal from './../navbarHorizontal.jsx'

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

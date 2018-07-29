import React,{Component} from 'react';

import TitleHeader from './../titleHeader.jsx';
import FeaturedPhotoViewer from './../featuredPhotoViewer.jsx';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <TitleHeader/>
        <br/>
        <FeaturedPhotoViewer/>
      </div>
    );
  }
}

export default Home;

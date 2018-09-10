import React,{Component} from 'react';
import {Grid} from 'react-bootstrap';

import TitleHeader from './../titleHeader.jsx';

class Gallery extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="gallery__wrapper">
        <Grid>
          <TitleHeader/>
          
        </Grid>

      </div>
    );
  }
}

export default Gallery;

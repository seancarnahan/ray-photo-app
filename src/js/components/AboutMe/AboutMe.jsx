import React,{Component} from 'react';
import {Image, Grid} from 'react-bootstrap';

import TitleHeader from './../titleHeader.jsx';
import BioInfo from './../bioInfo.jsx';
import AboutMeNavbar from './../aboutMeNavbar.jsx';
import Contact from './../contact.jsx';

class AboutMe extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="aboutMe__wrapper">
        <AboutMeNavbar/>
        <Grid>
          <h1 className="aboutMe__header">
            About Me
          </h1>
          <Image className="aboutMeCoverPhoto__wrapper" alt="cant find image 1" src="assets/about-me-cover-photo/aboutMeCoverPhoto1.jpg" responsive/>
        </Grid>
        <BioInfo/>
        <Contact/>
      </div>
    );
  }
}

export default AboutMe;

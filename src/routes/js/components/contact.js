import React, {Component} from 'react';
import {Grid, Button} from 'react-bootstrap';

class Contact extends Component {
  constructor(props) {
    super(props);

  }



  render(){
    return(
      <Grid>
        <h1 className="contact__header">
          Contact Me
        </h1>
        <form >
          <div className="nameBox">
            <label htmlFor="message">Name</label><br/>
            <input id="message" cols="80" rows="8" required
             placeholder="Enter name here" type="text"></input>
          </div>
          <br/>
          <div className="emailBox">
            <label htmlFor ="emailAddress">Your email address</label><br/>
            <input id="emailAddress" type="email" size="64" maxLength="64" required
              placeholder="username@email.com" pattern=".+@beststartupever.com"
              title="Please provide your email address" type="text"/>
          </div>

          
          <input className="contact_submit-button" type="submit" value="Submit"/>
          <br/>

          <br/>
          <address className="vertical-nav_item-email">
            Contact Ray: <a className="vertical-nav_item-email-address" href="mailto:rhadnett@gmail.com">Rhadnett@gmail.com</a>
          </address>
        </form>
      </Grid>
    );
  }
}

export default Contact;

import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

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
        <form>
          <div className="emailBox">
            <label for ="emailAddress">Your email address</label><br/>
            <input id="emailAddress" type="email" size="64" maxLength="64" required
              placeholder="username@beststartupever.com" pattern=".+@beststartupever.com"
              title="Please provide only a Best Startup Ever corporate email address"/>
          </div>

          <div className="messageBox">
            <label for="message">Request</label><br/>
            <textarea id="message" cols="80" rows="8" required
             placeholder="My shoes are too tight, and I have forgotten how to dance."></textarea>
          </div>
          <input type="submit" value="Send Request"/>
        </form>
      </Grid>
    );
  }
}

export default Contact;

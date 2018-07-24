import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './js/components/Home/Home';
import Gallery from './js/components/Gallery/Gallery';
import AboutMe from './js/components/AboutMe/AboutMe';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      albumType: ''
    };
  }

  render(){
    return(
      <Home/>
      /*
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/AboutMe" component={AboutMe} />
        </div>
      </Router>
      */
    );
  }
}




ReactDOM.render(<App />, document.getElementById("root"));

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: ''
    };
  }

  render(){
    return(
      <Routes/>
    );
  }
}




ReactDOM.render(<App />, document.getElementById("container"));

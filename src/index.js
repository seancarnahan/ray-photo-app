import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';


//refactor this later to a functional component
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Routes/>
    );
  }
}




ReactDOM.render(<App />, document.getElementById("container"));

import React, {Component} from "react";
// do not need to import ReactDOM here because we are not posting anything to the DOM

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}

export default SearchBar;

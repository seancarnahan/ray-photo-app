//import statements to make App component work
//'react' is installed in node_modules as a dependency
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //youtubes search api library
import _ from 'lodash';

//local imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyDj7Rt39v17Mg3iTo1Oz5_tXqGLJpf_BHU";


//app is made into a class component in order to keep track of its videos through state
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('another irish drinking song')

/*
    //returns objects with title, thumbnail, description etc of specific videos based off of the search term
    //this was moved inside the constructor becuase we want the user to see something as soon as it loads up
    YTSearch({key : API_KEY, term : 'doubt it '}, (videos) => {
      //this.setState({ videos : videos}); this line can be simplified to the line below using es6 syntax
      this.setState({
        videos : videos, //now that there are 2 states you can't do this.setState({ videos});
        selectedVideo: videos[0] //init selected video with the first video so it doesnt just say Loading
      });
    });

    this was commented out and then placed the necessary info into
    videoSearch so that we dont have duplicate code
*/

  }

videoSearch(term) {
  YTSearch({key : API_KEY, term : term}  , (videos) => {
    this.setState({
      videos : videos,
      selectedVideo: videos[0]
    });
  });
}

  render(){
    //throttling for videoSearch, it wont be called for 300 miliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


//take this component's generated HTML and place into the DOM
//in order for this to work you need to both import react and reactDOM
//also important to note that only component instances can rendered to the dom
ReactDOM.render(<App />, document.querySelector(".container"));

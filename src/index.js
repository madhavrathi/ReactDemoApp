import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
//whenever we import file that we wrote, then
//we need to give file reference
//reference is realtive to the current file
//we do not need to mention file extension as
//long as it is ".js"
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';
import VideoList from './components/video_list';
//saving the key
const API_KEY = 'AIzaSyBm_DXntBAcH0xxAiTL8MIiuikv76e9KLE';


//create a new component and this should
//produce some HTML
//arrow function
//for a multiline JSX code we put it inside brackets()
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('magic');
  }


  videoSearch(term){
    YTSearch({key: API_KEY, term: term},(videos)=>{
       this.setState({ videos: videos, selectedVideo:videos[0] });
       //this.setState({videos: videos})
    });
  }
  render(){
    return(
      <div>
         <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
         <VideoDetails video={this.state.selectedVideo} />
         <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}
//passing data from index.js to video_list.js
//by props videos = {this.state.videos}

//we're trying to render dom here, so ReactDom
//we should pass an instance of class App
//to make instance of app we wrap it around
//JSX brackets
//And
//put component on page(DOM) as second arguement
ReactDom.render(<App />, document.querySelector('.container'));

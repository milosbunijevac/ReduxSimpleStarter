import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import VideoDetail from './components/VideoDetail.js';
import VideoListItem from './components/VideoListItem.js';
import VideoList from './components/VideoList.js';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBjzdlQIL5bEN6pMIfkfCiJT5HQJVYAGK0';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));
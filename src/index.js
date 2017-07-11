import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'
import VideoDetail from './components/video_detail.js';
import VideoListItem from './components/video_list_item.js';
import VideoList from './components/video_list.js';

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
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));
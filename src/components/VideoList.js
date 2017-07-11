import React from 'react';
import VideoListItem from './VideoListItem.js';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let vids = this.props.videos.map((video, i) => {
      return (
        <div key={i}>
          <VideoListItem video={video} onVideoSelect={this.props.onVideoSelect} />
        </div>
      )
    })
    return(
      <div>
        <ul className="col-md-4 list-group">
          {vids}
        </ul>
      </div>
    )
  }
}

export default VideoList;

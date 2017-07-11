import React from 'react';
import VideoListItem from './VideoListItem.js';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let vids = this.props.videos.map((video) => {
      return (
        <div>
          <VideoListItem video={video} />
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

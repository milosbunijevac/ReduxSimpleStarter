import React from 'react';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    if(!this.props.video){
      return(
        <div>
          Loading
        </div>
      )
    } else {
      let video = this.props.video;
      let videoId = this.props.video.id.videoId;
      let url = `https://www.youtube.com/embed/${videoId}`;
      return(
      <div>
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}>
            </iframe>
          </div>
          <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        </div>
      </div>
    )
    }

  }
}

export default VideoDetail;

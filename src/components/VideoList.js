import React from 'react';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul className="col-md-4 list-group">
          {this.props.videos.length}
        </ul>
      </div>
    )
  }
}

export default VideoList;

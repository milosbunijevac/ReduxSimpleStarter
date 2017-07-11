import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return(
      <div>
        <input onChange={this.onInputChange.bind(this)}/>
      </div>
    )
  }
}

export default SearchBar;

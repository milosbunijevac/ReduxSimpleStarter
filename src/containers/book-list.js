import React from 'react';
import {connect} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  

  render() {
      return ( 
        <ul className = "list-group col-sm-4" >
          {this.renderList()}
        </ul>
      )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
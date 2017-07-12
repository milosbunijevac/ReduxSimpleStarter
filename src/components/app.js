import React, { Component } from 'react';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import BookList from '../containers/book-list.js';
import BookDetail from '../containers/book-detail.js';
import BookReducer from '../reducers/index.js';


export default class App extends Component {
  render() {
    const store = createStore(BookReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    ));
    return ( 
      <div> 
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
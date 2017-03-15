import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import {logIn, logOut} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const windowFunctions = {store};
  Object.assign(window, windowFunctions);

  ReactDOM.render(<Root store= { store }/>, root);
});

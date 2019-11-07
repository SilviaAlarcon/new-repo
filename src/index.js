import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'; //Para crear la historia del navegador
import reducer from './reducers';
import initialState from './initialState';
import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());
const history = createBrowserHistory(); //creamos nuestra historia 

ReactDOM.render(
  //Redux necesita encapsular la app dentro de un provider 
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'));
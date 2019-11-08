import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'; //Para crear la historia del navegador
import reducer from './reducers';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  if (process.env.NODE_ENV === 'production') composeEnhacers = compose; //si estamos en produccion no va a llamar a REDUX_DEVTOOLS
  else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhancers());
  const history = createBrowserHistory(); //creamos nuestra historia 

  hydrate( //hydrate optimiza la app, evita que se renderice más de una vez
    //Redux necesita encapsular la app dentro de un provider 
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'));
}
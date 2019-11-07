import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router'; //crea una ruta estática para que el servidor no tenga problema al momento de crear las rutas a las que enviamos la app 
import { renderRoutes } from 'react-router-config';
import Routes from '../../routes/serverRoutes';
import Layout from '../../components/Layout';
import reducer from '../../reducers';
import initialState from '../../initialState';
import render from '../render';

const main = (req, res, next) => {
  try {
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter //recibe dos propiedades, location y context 
          location={req.url} //para saber exactamente en dónde estás parado 
          context={{}}
        >
          <Layout>
            {renderRoutes(Routes)}
          </Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState(); //nos da el estado que tenemos de nuestro store
    res.send(render(html, preloadedState)); //para enviarlo/mostrarlo al HTML 
  } catch (err) {
    next(err);
  }
};

export default main;
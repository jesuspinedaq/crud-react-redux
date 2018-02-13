import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App.jsx';
import configureStore from './store/store';

const history = createBrowserHistory();
const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

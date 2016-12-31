// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import ForecastContainer from './containers/ForecastContainer';
import MainContainer from './containers/MainContainer';
import App from './containers/App';
import store from './store/store';

const mount = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainContainer} />
      </Route>
    </Router>
  </Provider>,
  mount,
);
// <Route path="/forecast/:city" component={ForecastContainer} />

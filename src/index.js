import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './containers/app';
import HomeSearch from './containers/HomeSearch';
import ShowUser from './containers/ShowUser';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory} >
  		<Route path="/" component={App} >
  			<IndexRoute component={HomeSearch} />
  			<Route path="users/:username" component={ShowUser} />
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));

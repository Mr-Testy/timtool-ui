import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import TopWrapper from './containers/TopWrapper'
import reducer from './reducers'

const store = createStore(
	reducer,
	applyMiddleware(logger)
	)

const App = () => (
	<Provider store={store}>
	<Router>
	<TopWrapper />
	</Router>
	</Provider>
	);

render(<App />, document.getElementById('root'));

import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'
import Root from './components/layouts/Root'
import reducer from './reducers'

const store = createStore(
	reducer,
	applyMiddleware(
		thunk,
		logger,
		)
	)

render(
	<Root store={store} />,
	document.getElementById('root')
	)

import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import 'semantic-ui-css/semantic.min.css'
import Root from './components/Root'
import reducer from './reducers'

const store = createStore(
	reducer,
	applyMiddleware(logger)
	)

render(
	<Root store={store} />,
	document.getElementById('root')
	)

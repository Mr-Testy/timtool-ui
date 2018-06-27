import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxMulti from 'redux-multi'
import { batchedSubscribe } from 'redux-batched-subscribe'
import 'semantic-ui-css/semantic.min.css'
import Root from './components/layouts/Root'
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(
	logger,
	reduxThunk,
	reduxMulti
	)(createStore)

	const createStoreWithBatching = batchedSubscribe(
		fn => fn()
		)(createStoreWithMiddleware)

		const store = createStoreWithBatching(reducer)

		render(
			<Root store={store} />,
			document.getElementById('root')
			)

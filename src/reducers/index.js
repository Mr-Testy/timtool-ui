import { combineReducers } from 'redux'
import tunes from './tunes'
import sidebar from './sidebar'
import breadcrumb from './breadcrumb'

const rootReducer = combineReducers({
	tunes,
	sidebar,
	breadcrumb
})

export default rootReducer

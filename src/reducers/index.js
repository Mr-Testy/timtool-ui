import { combineReducers } from 'redux'
import tunes from './tunes'
import sidebar from './sidebar'
import breadcrumb from './breadcrumb'
import user from './user'

const rootReducer = combineReducers({
	tunes,
	sidebar,
	breadcrumb,
	user
})

export default rootReducer

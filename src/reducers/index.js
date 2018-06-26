import { combineReducers } from 'redux'
import tunes from './tunes'
import visibilityFilter from './visibilityFilter'
import sideBar from './sideBar'

const rootReducer = combineReducers({
	tunes,
	visibilityFilter,
	sideBar
})

export default rootReducer

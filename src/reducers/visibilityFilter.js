import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'

const visibilityFilter = (state = {filter: false}, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
		return action.filter
		default:
		return state
	}
}

export default visibilityFilter
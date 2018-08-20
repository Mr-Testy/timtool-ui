import _ from 'lodash'
import {
	SWITCH_VISIBLE_SIDE_BAR_ON,
	SWITCH_VISIBLE_SIDE_BAR_OFF,
} from '../constants'

export default function sideBar(state = {isVisible: false}, action) {
	switch (action.type) {
		case SWITCH_VISIBLE_SIDE_BAR_ON:
		return _.assign({}, state, {isVisible: true})

		case SWITCH_VISIBLE_SIDE_BAR_OFF:
		return _.assign({}, state, {isVisible: false})

		default:
		return state
	}
}
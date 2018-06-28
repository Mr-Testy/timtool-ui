import _ from 'lodash'
import {
	SWITCH_VISIBLE_SIDE_BAR_ON,
	SWITCH_VISIBLE_SIDE_BAR_OFF,
} from '../constants'

export default function sideBar(state = {IsVisible: false}, action) {
	switch (action.type) {
		case SWITCH_VISIBLE_SIDE_BAR_ON:
		return _.assign({}, state, {IsVisible: true})

		case SWITCH_VISIBLE_SIDE_BAR_OFF:
		return _.assign({}, state, {IsVisible: false})

		default:
		return state
	}
}
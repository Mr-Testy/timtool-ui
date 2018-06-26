import _ from 'lodash'
import {
	SWITCH_VISIBLE_SIDE_BAR_ON,
	SWITCH_VISIBLE_SIDE_BAR_OFF,
} from '../constants/ActionTypes'

export default function sideBar(state={sideBarIsVisible: false}, action) {
	switch (action.type) {
		case SWITCH_VISIBLE_SIDE_BAR_ON:
		return _.assign({}, state, {sideBarIsVisible: true})

		case SWITCH_VISIBLE_SIDE_BAR_OFF:
		return _.assign({}, state, {sideBarIsVisible: false})

		default:
		return state
	}
}
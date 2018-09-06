import _ from 'lodash'
import * as CONST from '../constants/sidebar_constants'

export default function sideBar(state = {isVisible: false}, action) {
	switch (action.type) {
		case CONST.SWITCH_VISIBLE_SIDE_BAR_ON:
		return _.assign({}, state, {isVisible: true})

		case CONST.SWITCH_VISIBLE_SIDE_BAR_OFF:
		return _.assign({}, state, {isVisible: false})

		default:
		return state
	}
}
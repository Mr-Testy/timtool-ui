import _ from 'lodash'
import {
	REINIT_BREADCRUMB,
	ADD_TO_BREADCRUMB,
} from '../constants'

export default function breadcrumb(state = [{
	path: "/",
	title: "Home",
	subTitle: "Bienvenue à la maison"
}], action) {
	switch (action.type) {
		case REINIT_BREADCRUMB:
		return _.assign({}, {IsVisible: true})

		case ADD_TO_BREADCRUMB:
		return _.assign({}, state, {IsVisible: false})

		default:
		return state
	}
}
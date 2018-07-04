import _ from 'lodash'
import {
	REINIT_BREADCRUMB,
	ADD_TO_BREADCRUMB,
	ROLL_BACK_BREADCRUMB,
	SWITCH_HEADER_SEARCH_PERFORMED,
	SWITCH_IS_FIRST_PAGE_VISITED
} from '../constants'

export default function breadcrumb(state = {pages: [{
	path: "/",
	title: "Home",
	subTitle: "Bienvenue à la maison",
	icon: "home"
}],
isSearchPerformedFromHeader : false,
isFirstPageVisited : true}, action) {
	switch (action.type) {
		case SWITCH_IS_FIRST_PAGE_VISITED:
		return _.assign({}, state, {isFirstPageVisited : false})

		case REINIT_BREADCRUMB:
		return _.assign({}, {pages: [{
			path: action.path,
			title: action.title,
			subTitle: action.subTitle,
			icon: action.icon
		}],
		isSearchPerformedFromHeader : false})

		case ADD_TO_BREADCRUMB:
		return _.assign({}, state, {IsVisible: false})

		case ROLL_BACK_BREADCRUMB:
		return _.assign({}, state.breadcrumb.slice(0, action.destination + 1))

		case SWITCH_HEADER_SEARCH_PERFORMED:
		return _.assign({}, state, {isSearchPerformedFromHeader: true})

		default:
		return state
	}
}
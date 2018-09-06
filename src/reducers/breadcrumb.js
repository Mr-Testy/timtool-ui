import _ from 'lodash'
import * as CONST from '../constants/breadcrumb_constants'

export default function breadcrumb(state = {pages: [{
	path: "/",
	title: "Home",
	subTitle: "Bienvenue à la maison",
	icon: "home"
}],
isSearchPerformedFromHeader : false,
isFirstPageVisited : true}, action) {
	switch (action.type) {
		case CONST.SWITCH_IS_FIRST_PAGE_VISITED:
		return _.assign({}, state, {isFirstPageVisited : false})

		case CONST.REINIT_BREADCRUMB:
		return _.assign({}, {pages: [{
			path: action.path,
			title: action.title,
			subTitle: action.subTitle,
			icon: action.icon
		}],
		isSearchPerformedFromHeader : false})

		case CONST.ADD_TO_BREADCRUMB:
		return _.assign({}, state, {IsVisible: false})

		case CONST.ROLL_BACK_BREADCRUMB:
		return _.assign({}, state.breadcrumb.slice(0, action.destination + 1))

		case CONST.SWITCH_HEADER_SEARCH_PERFORMED:
		return _.assign({}, state, {isSearchPerformedFromHeader: true})

		default:
		return state
	}
}
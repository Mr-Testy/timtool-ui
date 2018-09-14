import _ from 'lodash'
import * as CONST from '../constants/user_constants'

export default function breadcrumb(state = {
	isLogged: false,
	isLogging: false,
	lastUpdated: null,
	username: null,
	token: null,
	errors: [],
	isFetchingFavoritedTunes: false,
	lastUpdatedFavoritedTunes: null,
	favoritedTunes: [],
	filteredTunes: [],
	filters: {
		name: "",
		key: "",
		type: ""
	},
	areStale: true,
	activePage: 1,
	tunesPerPage: 30,
	selectedTune: {}
}, action) {
	switch (action.type) {
		case CONST.REQUEST_TOKEN:
		return _.assign({}, state, {
			isLogging : true,
			username: action.username,
		})

		case CONST.RECEIVE_TOKEN:
		return _.assign({}, state, {
			isLogging: false,
			isLogged: true,
			token: action.token["token"],
			lastUpdated: action.receivedAt,
		})

		case CONST.RECEIVE_TOKEN_ERROR:
		return _.assign({}, state, {
			isLogging: false,
			isLogged: false,
			lastUpdated: action.receivedAt,
			username: null,
			errors: action.non_field_errors
		})

		case CONST.LOGOUT:
		return _.assign({}, state, {
			isLogged: false,
			isLogging: false,
			lastUpdated: null,
			username: null,
			token: null,
			errors: []
		})

		case CONST.REQUEST_FAVORITED_TUNES:
		return Object.assign({}, state, {
			isFetching: true,
		})

		case CONST.RECEIVE_FAVORITED_TUNES:
		return Object.assign({}, state, {
			isFetchingFavoritedTunes: false,
			favoritedTunes: action.tunes,
			filteredTunes: action.tunes,
			lastUpdatedFavoritedTunes: action.receivedAt,
			areStale: false,
		})

		default:
		return state
	}
}
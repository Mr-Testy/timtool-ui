import _ from 'lodash'
import * as CONST from '../constants/user_constants'

function isLearnedStringToBool (string, status) {
	if (string === "Choose") {
		return true
	} else {
		if (string === "Learned") {
			return status === true
		} else {
			return status === false
		}
	}
}

export default function breadcrumb(state = {
	isLogged: false,
	isLogging: false,
	lastUpdated: null,
	username: null,
	token: null,
	errors: [],
	isFetchingFavouritedTunes: false,
	lastUpdatedFavouritedTunes: null,
	favouritedTunes: [],
	filteredTunes: [],
	filters: {
		name: "",
		key: "",
		type: "",
		learned: "",
	},
	areStale: true,
	activePage: 1,
	tunesPerPage: 30,
	requestedFavori: "",
	requestedStatus: "",
	lastUpdatedSwitchFavori: null,
	lastUpdatedSwitchStatus: null,
	switchFavoriResponse: null,
	switchStatusResponse: null,
	isFetchingSwitchFavori: false,
	isFetchingSwitchStatus: false,
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
			errors: [],
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

		case CONST.REQUEST_FAVOURITED_TUNES:
		return Object.assign({}, state, {
			isFetchingFavouritedTunes: true,
		})

		case CONST.RECEIVE_FAVOURITED_TUNES:
		let flatTunes = action.favouritedTunes.map(tune => {
			let flatTune = tune
			flatTune["name"] = tune.of_tune.name
			flatTune["key"] = tune.of_tune.key
			flatTune["type"] = tune.of_tune.type
			flatTune["slug"] = tune.of_tune.slug
			flatTune["date_creation"] = tune.of_tune.date_creation
			flatTune["titles"] = tune.of_tune.titles
			delete flatTune.of_tune
			return(flatTune)
		})
		
		return Object.assign({}, state, {
			isFetchingFavouritedTunes: false,
			favouritedTunes: flatTunes,
			filteredTunes: flatTunes,
			lastUpdatedFavouritedTunes: action.receivedAt,
			areStale: false,
		})

		case CONST.CHANGE_PAGE_OF_TUNES:
		return Object.assign({}, state, {
			activePage: action.activePage,
		})

		case CONST.FILTER_FAVOURITED_TUNES_BY_NAME:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {name: action.name}),
			filteredTunes: _.filter(state.favouritedTunes, (tune) => {
				let bool = (_.filter(tune.titles, (title) => title.name.toLowerCase().includes(action.name.toLowerCase())).length > 0 ) &&
				tune.key.toLowerCase().includes(state.filters["key"].toLowerCase()) &&
				tune.type.toLowerCase().includes(state.filters["type"].toLowerCase()) &&
				isLearnedStringToBool(action.learned, tune.status);
				if (bool) return tune;
			})
		})

		case CONST.FILTER_FAVOURITED_TUNES_BY_KEY:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {key: action.key}),
			filteredTunes: _.filter(state.favouritedTunes, (tune) => {
				let bool = (_.filter(tune.titles, (title) => title.name.toLowerCase().includes(state.filters["name"].toLowerCase())).length > 0 ) &&
				tune.key.toLowerCase().includes(action.key.toLowerCase()) &&
				tune.type.toLowerCase().includes(state.filters["type"].toLowerCase()) &&
				isLearnedStringToBool(action.learned, tune.status);
				if (bool) return tune;
			})
		})

		case CONST.FILTER_FAVOURITED_TUNES_BY_TYPE:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {type: action.filterType}),
			filteredTunes: _.filter(state.favouritedTunes, (tune) => {
				let bool = (_.filter(tune.titles, (title) => title.name.toLowerCase().includes(state.filters["name"].toLowerCase())).length > 0 ) &&
				tune.key.toLowerCase().includes(state.filters["key"].toLowerCase()) &&
				tune.type.toLowerCase().includes(action.filterType.toLowerCase()) &&
				isLearnedStringToBool(action.learned, tune.status);
				if (bool) return tune;
			})
		})
		case CONST.REINIT_FAVOURITED_TUNE_FILTERS:
		return Object.assign({}, state, {
			filters: {
				name: "",
				key: "",
				type: "",
				learned: "",
			},
			filteredTunes: state.favouritedTunes,
			activePage: 1
		})

		case CONST.FILTER_FAVOURITED_TUNES_BY_LEARNED:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {learned: action.learned}),
			filteredTunes: _.filter(state.favouritedTunes, (tune) => {
				let bool = (_.filter(tune.titles, (title) => title.name.toLowerCase().includes(state.filters["name"].toLowerCase())).length > 0 ) &&
				tune.key.toLowerCase().includes(state.filters["key"].toLowerCase()) &&
				tune.type.toLowerCase().includes(state.filters["type"].toLowerCase()) &&
				isLearnedStringToBool(action.learned, tune.status);
				if (bool) return tune;
			})
		})

		case CONST.REQUEST_SWITCH_FAVORI:
		return Object.assign({}, state, {
			isFetchingSwitchFavori: true,
			requestedFavori: action.slug,
			requestedStatus: "",
		})

		case CONST.RECEIVE_SWITCH_FAVORI:
		return _.assign({}, state, {
			isFetchingSwitchFavori: false,
			switchFavoriResponse: action.response,
			lastUpdatedSwitchFavori: action.receivedAt,
			areStale: true,
		})

		case CONST.REQUEST_SWITCH_STATUS:
		return Object.assign({}, state, {
			isFetchingSwitchStatus: true,
			requestedStatus: action.slug,
			requestedFavori: "",
		})

		case CONST.RECEIVE_SWITCH_STATUS:
		return _.assign({}, state, {
			isFetchingSwitchStatus: false,
			switchStatusResponse: action.response,
			lastUpdatedSwitchStatus: action.receivedAt,
			areStale: true,
		})

		default:
		return state
	}
}
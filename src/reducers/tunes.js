import _ from 'lodash'

import {
	REQUEST_TUNES,
	RECEIVE_TUNES,
	CHANGE_PAGE_OF_TUNES,
	FILTER_TUNES_BY_NAME,
	FILTER_TUNES_BY_KEY,
	FILTER_TUNES_BY_TYPE,
	REINIT_TUNE_FILTERS
} from '../constants'

export default function tunes(state = {
	isFetching: false,
	tunes: [],
	filteredTunes: [],
	filters: {
		name: "",
		key: "",
		type: ""
	},
	areStale: true,
	activePage: 1,
	tunesPerPage: 50
}, action) {
	switch (action.type) {
		case REQUEST_TUNES:
		return Object.assign({}, state, {
			isFetching: true,
		})

		case RECEIVE_TUNES:
		return Object.assign({}, state, {
			isFetching: false,
			tunes: action.tunes,
			filteredTunes: action.tunes,
			lastUpdated: action.receivedAt,
			areStale: false,
		})

		case CHANGE_PAGE_OF_TUNES:
		return Object.assign({}, state, {
			activePage: action.activePage,
		})

		case FILTER_TUNES_BY_NAME:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {name: action.name}),
			filteredTunes: _.filter(state.tunes, (tune) => {
				let bool = tune.name.toLowerCase().includes(action.name.toLowerCase()) &&
				tune.key.toLowerCase().includes(state.filters["key"].toLowerCase()) &&
				tune.type.toLowerCase().includes(state.filters["type"].toLowerCase());
				if (bool) return tune;
			})
		})

		case FILTER_TUNES_BY_KEY:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {key: action.key}),
			filteredTunes: _.filter(state.tunes, (tune) => {
				let bool = tune.name.toLowerCase().includes(state.filters["name"].toLowerCase()) &&
				tune.key.toLowerCase().includes(action.key.toLowerCase()) &&
				tune.type.toLowerCase().includes(state.filters["type"].toLowerCase());
				if (bool) return tune;
			})
		})

		case FILTER_TUNES_BY_TYPE:
		return Object.assign({}, state, {
			activePage: 1,
			filters: Object.assign({}, state.filters, {type: action.filterType}),
			filteredTunes: _.filter(state.tunes, (tune) => {
				let bool = tune.name.toLowerCase().includes(state.filters["name"].toLowerCase()) &&
				tune.key.toLowerCase().includes(state.filters["key"].toLowerCase()) &&
				tune.type.toLowerCase().includes(action.filterType.toLowerCase());
				if (bool) return tune;
			})
		})
		case REINIT_TUNE_FILTERS:
		return Object.assign({}, state, {
			filters: {
				name: "",
				key: "",
				type: ""
			},
			filteredTunes: state.tunes,
			activePage: 1
		})

		default:
		return state
	}
}
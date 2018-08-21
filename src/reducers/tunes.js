import {
	REQUEST_TUNES,
	RECEIVE_TUNES,
	CHANGE_PAGE_OF_TUNES
} from '../constants'

export default function tunes(state = {
	isFetching: false,
	tunes: [],
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
			lastUpdated: action.receivedAt,
			areStale: false,
		})

		case CHANGE_PAGE_OF_TUNES:
		return Object.assign({}, state, {
			activePage: action.activePage,
		})

		default:
		return state
	}
}
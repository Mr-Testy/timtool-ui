import {
	REQUEST_TUNES,
	RECEIVE_TUNES
} from '../constants'

export default function tunes(state = {
	isFetching: false,
	tunes: [],
	areStale: true
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

		default:
		return state
	}
}
import * as types from '../constants/user_constants'

export const logout = () => ({
	type: types.LOGOUT,
})

export const requestToken = (username) => ({ type: types.REQUEST_TOKEN,
	username: username
})
export const receiveToken = (json) => ({
	type: types.RECEIVE_TOKEN,
	token: json,
	receivedAt: Date.now()
})

export const receiveTokenError = (json) => ({
	type: types.RECEIVE_TOKEN_ERROR,
	non_field_errors: json["non_field_errors"],
	receivedAt: Date.now()
})

export const requestFavouritedTunes = () => ({ type: types.REQUEST_FAVOURITED_TUNES })
export const receiveFavouritedTunes = (json) => ({
	type: types.RECEIVE_FAVOURITED_TUNES,
	favouritedTunes: json,
	receivedAt: Date.now()
})

export const changePageOfTunes = (activePage) => ({ 
	type: types.CHANGE_PAGE_OF_TUNES,
	activePage: activePage
})

export const filterFavouritedTunesByName = (name) => ({ 
	type: types.FILTER_FAVOURITED_TUNES_BY_NAME,
	name: name
})
export const filterFavouritedTunesByKey = (key) => ({
	type: types.FILTER_FAVOURITED_TUNES_BY_KEY,
	key: key
})
export const filterFavouritedTunesByType = (filterType) => ({
	type: types.FILTER_FAVOURITED_TUNES_BY_TYPE,
	filterType: filterType
})
export const reinitFavouritedTuneFilters = () => ({ type: types.REINIT_FAVOURITED_TUNE_FILTERS })

export const filterFavouritedTunesByLearned = (learned) => ({
	type: types.FILTER_FAVOURITED_TUNES_BY_LEARNED,
	learned: learned
})

export const requestSwitchFavori = (slug) => ({ 
	type: types.REQUEST_SWITCH_FAVORI,
	slug: slug
	 })
export const receiveSwitchFavori = (json) => ({
	type: types.RECEIVE_SWITCH_FAVORI,
	response: json,
	receivedAt: Date.now()
})

export const requestSwitchStatus = (slug) => ({ 
	type: types.REQUEST_SWITCH_STATUS,
	slug: slug
	 })
export const receiveSwitchStatus = (json) => ({
	type: types.RECEIVE_SWITCH_STATUS,
	response: json,
	receivedAt: Date.now()
})
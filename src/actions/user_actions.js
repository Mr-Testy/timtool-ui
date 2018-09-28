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

export const requestFavoritedTunes = () => ({ type: types.REQUEST_FAVORITED_TUNES })
export const receiveFavoritedTunes = (json) => ({
	type: types.RECEIVE_FAVORITED_TUNES,
	favoritedTunes: json,
	receivedAt: Date.now()
})

export const changePageOfTunes = (activePage) => ({ 
	type: types.CHANGE_PAGE_OF_TUNES,
	activePage: activePage
})

export const filterFavoritedTunesByName = (name) => ({ 
	type: types.FILTER_FAVORITED_TUNES_BY_NAME,
	name: name
})
export const filterFavoritedTunesByKey = (key) => ({
	type: types.FILTER_FAVORITED_TUNES_BY_KEY,
	key: key
})
export const filterFavoritedTunesByType = (filterType) => ({
	type: types.FILTER_FAVORITED_TUNES_BY_TYPE,
	filterType: filterType
})
export const reinitFavoritedTuneFilters = () => ({ type: types.REINIT_FAVORITED_TUNE_FILTERS })

export const filterFavoritedTunesByLearned = (learned) => ({
	type: types.FILTER_FAVORITED_TUNES_BY_LEARNED,
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
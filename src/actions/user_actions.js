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
export const receiveFavoritesTunes = (json) => ({
	type: types.RECEIVE_FAVORITED_TUNES,
	favoritedTunes: json,
	receivedAt: Date.now()
})
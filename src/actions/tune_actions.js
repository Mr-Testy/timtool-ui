import * as types from '../constants/tune_constants'

export const requestTunes = () => ({ type: types.REQUEST_TUNES })
export const receiveTunes = (json) => ({
	type: types.RECEIVE_TUNES,
	tunes: json,
	receivedAt: Date.now()
})
export const requestTune = (slug) => ({ type: types.REQUEST_TUNE,
	requestedTune: slug
})
export const receiveTune = (json) => ({
	type: types.RECEIVE_TUNE,
	tune: json,
	receivedAt: Date.now()
})
export const changePageOfTunes = (activePage) => ({ 
	type: types.CHANGE_PAGE_OF_TUNES,
	activePage: activePage
})
export const filterTunesByName = (name) => ({ 
	type: types.FILTER_TUNES_BY_NAME,
	name: name
})
export const filterTunesByKey = (key) => ({
	type: types.FILTER_TUNES_BY_KEY,
	key: key
})
export const filterTunesByType = (filterType) => ({
	type: types.FILTER_TUNES_BY_TYPE,
	filterType: filterType
})
export const reinitTuneFilters = () => ({ type: types.REINIT_TUNE_FILTERS })



import * as types from '../constants'

export const switchVisibleSideBarOn = () => ({ type: types.SWITCH_VISIBLE_SIDE_BAR_ON })
export const switchVisibleSideBarOff = () => ({ type: types.SWITCH_VISIBLE_SIDE_BAR_OFF })

export const reInitBreadcrumb = (path, title, subTitle, icon) => ({ 
	type: types.REINIT_BREADCRUMB,
	path: path,
	title: title,
	subTitle: subTitle,
	icon: icon
})
export const addToBreadcrumb = () => ({ type: types.ADD_TO_BREADCRUMB })
export const rollBackBreadcrumb = (destination) => ({ 
	type: types.ROLL_BACK_BREADCRUMB,
	destination: destination
})
export const switchHeaderSearchPerformed = () => ({ type: types.SWITCH_HEADER_SEARCH_PERFORMED })
export const switchIsFirstPageVisited = () => ({ type: types.SWITCH_IS_FIRST_PAGE_VISITED })
// export const redirect = (to) => ({ type: types.REDIRECT, to: to })

export const requestTunes = () => ({ type: types.REQUEST_TUNES })
export const receiveTunes = (json) => ({
	type: types.RECEIVE_TUNES,
	tunes: json,
	receivedAt: Date.now()
})
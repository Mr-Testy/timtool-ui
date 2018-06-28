import * as types from '../constants'

export const switchVisibleSideBarOn = () => ({ type: types.SWITCH_VISIBLE_SIDE_BAR_ON })
export const switchVisibleSideBarOff = () => ({ type: types.SWITCH_VISIBLE_SIDE_BAR_OFF })

export const ReInitBreadcrumb = () => ({ type: types.REINIT_BREADCRUMB })
export const AddToBreadcrumb = () => ({ type: types.ADD_TO_BREADCRUMB })
export const rollBackNavBar = () => ({ type: types.ROLL_BACK_NAV_BAR })
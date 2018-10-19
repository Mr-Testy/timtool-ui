import { connect } from 'react-redux'
// import * as TuneActionCreators from '../../actions/tune_actions'
import * as UserActionCreators from '../../actions/user_actions'
import Status from '../../components/elements/Status'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	SWITCH_STATUS,
} from '../../constants/CONFIG'

const mapStateToProps = (state, ownProps) => {
	return {
		tune: ownProps.tune,
		token: state.user.token,
		isLogged: state.user.isLogged,
		isFetchingFavouritedTunes: state.user.isFetchingFavouritedTunes,
		isFetchingSwitchStatus: state.user.isFetchingSwitchStatus,
		requestedStatus: state.user.requestedStatus,
	}
}

const mapDispatchToProps = dispatch => {
	return {
			switchStatus: (slug, token) => {
			dispatch(UserActionCreators.requestSwitchStatus(slug))
			fetch(BACKEND_URL+SWITCH_STATUS, {
				method: "POST",
				headers: {
      				'Authorization': 'Token ' + token,
      				'Content-Type': 'application/json'
    			},
				body: JSON.stringify({
					tune_favori_slug: slug,
				})
			})
			.then(response => response.json())
			.then(json => {
				dispatch(UserActionCreators.receiveSwitchStatus(json["result"]))
			})
	}
		}
	}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    	return Object.assign({}, ownProps, propsFromState, propsFromDispatch, {
    switchStatus: (slug) => propsFromDispatch.switchStatus(slug, propsFromState.token)
  })
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
	)(Status))


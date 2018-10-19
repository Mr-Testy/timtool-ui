import { connect } from 'react-redux'
// import * as TuneActionCreators from '../../actions/tune_actions'
import * as UserActionCreators from '../../actions/user_actions'
import Favori from '../../components/elements/Favori'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	SWITCH_FAVORI,
} from '../../constants/CONFIG'

const mapStateToProps = (state, ownProps) => {
	return {
		isLogged: state.user.isLogged,
		favouritedTunes: state.user.favouritedTunes,
		tune: ownProps.tune,
		token: state.user.token,
		requestedFavori: state.user.requestedFavori,
		isFetchingFavouritedTunes: state.user.isFetchingFavouritedTunes,
		isFetchingSwitchFavori: state.user.isFetchingSwitchFavori,
	}
}

const mapDispatchToProps = dispatch => {
	return {
			switchFavori: (slug, token) => {
			dispatch(UserActionCreators.requestSwitchFavori(slug))
			fetch(BACKEND_URL+SWITCH_FAVORI, {
				method: "POST",
				headers: {
      				'Authorization': 'Token ' + token,
      				'Content-Type': 'application/json'
    			},
				body: JSON.stringify({
					tune_slug: slug,
				})
			})
			.then(response => response.json())
			.then(json => {
				dispatch(UserActionCreators.receiveSwitchFavori(json["result"]))
			})
	}
		}
	}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    	return Object.assign({}, ownProps, propsFromState, propsFromDispatch, {
    switchFavori: (slug) => propsFromDispatch.switchFavori(slug, propsFromState.token)
  })
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
	)(Favori))


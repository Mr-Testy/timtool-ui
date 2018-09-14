import { connect } from 'react-redux'
import * as UserActionCreators from '../../actions/user_actions'
import Login from '../../components/elements/Login'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		errors: state.user.errors,
		isLogging: state.user.isLogging
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: (username, password) => {
			dispatch(UserActionCreators.requestToken(username))
			fetch("https://testy-dev.satsu.eu/timtoolApi/get-token/", {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					password: password
				})
			})
			.then(response => response.json())
			.then(json => {
				if (json.hasOwnProperty("non_field_errors")){
					dispatch(UserActionCreators.receiveTokenError(json))
				}
				else {alert(json["token"])
					dispatch(UserActionCreators.receiveToken(json))
      				dispatch(UserActionCreators.requestFavoritedTunes())
					fetch('https://testy-dev.satsu.eu/timtoolApi/favoris/', {
						headers: {
							'Authorization' : 'Token '+json["token"]
						},
					})
					.then(response => response.json())
					.then(json => dispatch(UserActionCreators.requestFavoritedTunes(json)))
				}
			})
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Login))
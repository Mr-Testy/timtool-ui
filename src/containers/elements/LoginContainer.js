import { connect } from 'react-redux'
import * as UserActionCreators from '../../actions/user_actions'
import Login from '../../components/elements/Login'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	TOKEN,
} from '../../constants/CONFIG'

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
			fetch(BACKEND_URL+TOKEN, {
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
				else {
					dispatch(UserActionCreators.receiveToken(json))
				}
			})
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(Login))
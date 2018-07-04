import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import App from '../../components/layouts/App'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
	return {
		sideBarIsVisible: state.sidebar.IsVisible,
		breadcrumb: state.breadcrumb,
		location: ownProps.location
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchIsFirstPageVisited: () => dispatch(ActionCreators.switchIsFirstPageVisited()),
		switchVisibleSideBarOff: () => dispatch(ActionCreators.switchVisibleSideBarOff()),
		switchVisibleSideBarOn: () => dispatch(ActionCreators.switchVisibleSideBarOn()),
		changePage: (path, title, subTitle, icon) => {
			dispatch(ActionCreators.switchVisibleSideBarOff())
			dispatch(ActionCreators.reInitBreadcrumb(path, title, subTitle, icon))
		},
		fetchTunes: (min, max) => {
			dispatch(ActionCreators.requestTunes())
			fetch('https://testy-dev.satsu.eu/timtoolApi/tunes/?limit=' + min +';offset=' + max)
			.then(response => response.json())
			.then(json => dispatch(ActionCreators.receiveTunes(json)))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(App))
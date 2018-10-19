import { connect } from 'react-redux'
import * as TuneActionCreators from '../../actions/tune_actions'
// import * as UserActionCreators from '../../actions/user_actions'
import ListOfTunes from '../../components/elements/ListOfTunes'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	TUNE,
} from '../../constants/CONFIG'

const mapStateToProps = state => {
	return {
		tunes: state.tunes.filteredTunes,
		activePage: state.tunes.activePage,
		tunesPerPage: state.tunes.tunesPerPage,
		selectedTune: state.tunes.selectedTune,
		isFetchingTune: state.tunes.isFetchingTune,
		lastUpdatedTune: state.tunes.lastUpdatedTune,
		requestedTune: state.tunes.requestedTune,
		isLogged: state.user.isLogged,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changePageOfTunes: (activePage) => dispatch(TuneActionCreators.changePageOfTunes(activePage)),
		fetchTune: (slug) => {
			dispatch(TuneActionCreators.requestTune(slug))
			fetch(BACKEND_URL+TUNE+slug)
			.then(response => response.json())
			.then(json => dispatch(TuneActionCreators.receiveTune(json)))
		},
}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
	)(ListOfTunes))
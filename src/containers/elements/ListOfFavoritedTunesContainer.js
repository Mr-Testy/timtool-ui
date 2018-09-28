import { connect } from 'react-redux'
import * as TuneActionCreators from '../../actions/tune_actions'
import * as UserActionCreators from '../../actions/user_actions'
import ListOfTunes from '../../components/elements/ListOfTunes'
import { withRouter } from 'react-router-dom'
import {
	BACKEND_URL,
	TUNE,
} from '../../constants/CONFIG'

const mapStateToProps = state => {
	return {
		tunes: state.user.filteredTunes,
		activePage: state.user.activePage,
		tunesPerPage: state.user.tunesPerPage,
		selectedTune: state.tunes.selectedTune,
		isFetchingTune: state.tunes.isFetchingTune,
		lastUpdatedTune: state.tunes.lastUpdated,
		requestedTune: state.tunes.requestedTune
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changePageOfTunes: (activePage) => dispatch(UserActionCreators.changePageOfTunes(activePage)),
		fetchTune: (slug) => {
			dispatch(TuneActionCreators.requestTune(slug))
			fetch(BACKEND_URL+TUNE+slug)
			.then(response => response.json())
			.then(json => dispatch(TuneActionCreators.receiveTune(json)))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunes))


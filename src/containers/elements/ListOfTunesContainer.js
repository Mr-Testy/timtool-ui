import { connect } from 'react-redux'
import * as ActionCreators from '../../actions'
import ListOfTunes from '../../components/elements/ListOfTunes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		tunes: state.tunes.filteredTunes,
		activePage: state.tunes.activePage,
		tunesPerPage: state.tunes.tunesPerPage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changePageOfTunes: (activePage) => dispatch(ActionCreators.changePageOfTunes(activePage)),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListOfTunes))
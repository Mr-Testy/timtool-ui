import { connect } from 'react-redux'
// import * as TuneActionCreators from '../../actions/tune_actions'
import TuneDetails from '../../components/elements/TuneDetails'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		selectedTune: state.tunes.selectedTune,
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
	)(TuneDetails))
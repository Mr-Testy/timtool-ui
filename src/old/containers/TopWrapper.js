import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as ActionCreators from '../actions'
import TopWrapper from '../components/TopWrapper'

const mapStateToProps = state => ({
  sideBarIsVisible: state.sideBarIsVisible,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TopWrapper)
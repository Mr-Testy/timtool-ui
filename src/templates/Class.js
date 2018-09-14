import React from 'react'
import { 
  Form,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Login extends React.Component { 
  state = { needsSignup: false }

  handleItemClick = (e, { name }) => this.setState({ needsSignup: true })

  render () {
    const {
    } = this.props
    const { needsSignup } = this.state
    return (
      <React.Fragment>
      </React.Fragment>
      )
  }
}

Login.propTypes = {
  selectedTune: PropTypes.object.isRequired,
}

export default Login
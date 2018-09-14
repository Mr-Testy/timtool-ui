import React from 'react'
import { 
  Form,
  Button,
  Divider,
  Message,
  Label,
  Loader,
  Dimmer
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Login extends React.Component { 
  state = { 
    needsSignup: false,
    username: "",
    password: "",
    username_error: null,
    password_error: null
  }

  handleChangeForm = () => {
    this.setState((state) => { 
      return {needsSignup: !state.needsSignup }
    })
  }

  handleChangeUsername = (username) => {
    this.setState((state) => { 
      return {username: username }
    })
  }

  handleChangePassword = (password) => {
    this.setState((state) => { 
      return {password: password }
    })
  }

  handleSubmit = () => {
    if (this.state.username === "") {
    this.setState((state) => { 
      return {username_error: "Username cannot be blank"}
    })
  } else {
    this.setState((state) => { 
      return {username_error: null}
    })
  }
    if (this.state.password === "") {
    this.setState((state) => { 
      return {password_error: "Password cannot be blank"}
    })
    } else {
    this.setState((state) => { 
      return {password_error: null}
    })      
    }
    if (this.state.username !== "" && this.state.password !== "") {
    this.props.login(this.state.username, this.state.password)
  }
  }

  render () {
    const { needsSignup, username_error, password_error } = this.state
    const { errors, isLogging } = this.props
    return (
      <React.Fragment>
      { errors.length > 0 &&
        <React.Fragment>
        {errors.map((error) => 
          <Message
          error
          header='Bad credentials'
          content='Utilisateur ou mot de passe incorrect.'
          key={error}
          />
          )}
        </React.Fragment>
      }
      { !needsSignup ? (
        <Form onSubmit={(e) => this.handleSubmit()}>
          <Form.Field error={username_error != null}>
            <label>Username</label>
            <input placeholder='Michel' name="username" onChange={(e) => this.handleChangeUsername(e.target.value)}/>
            { username_error != null &&
              <Label basic color='red' pointing>
                {username_error}
              </Label>
            }
          </Form.Field>
          <Form.Field error={password_error != null}>
            <label>Password</label>
            <input type="password" placeholder='x@Po:/k45' name="password" onChange={(e) => this.handleChangePassword(e.target.value)}/>
            { password_error != null &&
              <Label basic color='red' pointing>
                {password_error}
              </Label>
            }
          </Form.Field>
          <Button primary type="submit">Log in</Button>
          { isLogging &&
            <Dimmer active>
              <Loader inline>Authenticating</Loader>
            </Dimmer>
          }
          <Button content="Forgotten password" />
          <Divider />
          <Form.Field>
            <label>Don't have an account ?</label>
            <Button secondary content="Sign up" onClick={(e) => this.handleChangeForm(e.target.value)}/>
          </Form.Field>
        </Form>
        ) : (
        <Form error>
          <Form.Field>
            <label>Username</label>
              <input placeholder='Michel' name="username" onChange={(e) => this.handleChangeUsername(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='x@Po:/k45' name="password" onChange={() => this.handleChangePassword()}/>
          </Form.Field>
          <Button primary>Sign up</Button>
          <Divider />
          <Form.Field>
            <label>Already have an account ?</label>
            <Button secondary content="Log in" onClick={() => this.handleChangeForm()}/>
          </Form.Field>
        </Form>
        )
      }
      </React.Fragment>
      )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  isLogging: PropTypes.bool.isRequired,
}

export default Login
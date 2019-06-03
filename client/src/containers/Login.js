import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Form,ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { authenticate } from '../actions/userActions';
class Login extends Component {

  state = {
    email: "",
    password: "",
    isValidated: false
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.authenticate(this.state)

    if (localStorage.token) {
      this.props.history.push('/')
      window.alert("You're Logged In!")
    }
  }

  //   if ( this.props.authenticate(this.state)) {
  //
  //     this.props.history.push('/')
  //     window.alert("You're Logged In!")
  //   } else {
  //
  //     window.alert("Sorry, something went wrong. Please try logging in again.")
  //   }
  // }

  componentDidUpdate = (prevProps) => {
    //
    if (this.props.user !== prevProps.user ) {
      console.log(this.props.user)
      if (this.props.user.isAuthenticating && this.props.user.errors.length !== 0){
        this.props.history.push('/')
        window.alert("You're Logged In!")
      } else if(this.props.user.errors.length !== 0) {
        window.alert("Sorry, something went wrong. Please try logging in again.")
      }
   }
}
render() {
  return(

  <Form className="login-form" onSubmit={this.handleSubmit}>
    <h1>LOGIN</h1>
    <FormGroup controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
    <FormControl type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </FormGroup>

    <FormGroup controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
    </FormGroup>
    <FormGroup controlId="formBasicChecbox">
      <Form.Check type="checkbox" label="Remember Me" />
    </FormGroup>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
       user: state.auth
   }
}


export default connect(mapStateToProps, { authenticate })(Login);

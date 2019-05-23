import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Form,ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import {createUser} from '../actions/userActions'
class SignUp extends Component {

  state = {
    username: "",
    email: "",
    password: "",
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = this.state
    if (this.props.createUser(user)) {
    this.props.history.push('/')
      window.alert("Thank you for signing up.")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }
render() {
  return(

  <Form className="signup-form" onSubmit={this.handleSubmit}>
    <h1> CREATE A NEW ACCOUNT </h1>
    <FormGroup controlId="exampleForm.ControlInput1">
      <Form.Label>Username: </Form.Label>
    <FormControl type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChange} />
    </FormGroup>

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
export default connect(null, { createUser }) (SignUp)

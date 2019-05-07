import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Button,Form,ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class Login extends Component {

  state = {
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
  }
render() {
  return(

  <Form onSubmit={this.handleSubmit}>
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
export default Login

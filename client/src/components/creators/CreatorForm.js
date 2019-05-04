import React, { Component } from 'react';
import {Button,Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

// import { connect } from 'react-redux'
// import { withRouter, Redirect } from 'react-router-dom'
import { createCreator } from '../../actions/creatorActions'



class CreatorForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      image: "",
      platform: "",
      bio: "",
      videos: [],
      category: [],
      collabsWith: []

    }
  }

  handleChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   }

   handleSubmit = event => {
     event.preventDefault()
     const creator = this.state

     this.props.createCreator(creator)
     this.setState({
       name: "",
       image: "",
       platform: "",
       bio: "",
       videos: [],
       categories: [],
       collabsWith: []
     })
   }

   render() {
     return(
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Creator Name:</Form.Label>
        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

      <Form.Label>Image:</Form.Label>
        <Form.Control type="file" name="image" value={this.state.image} onChange={this.handleChange}/>

      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Categories:</Form.Label>
        <Form.Control as="select" multiple name="categories" value={this.state.categories} onChange={this.handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio:</Form.Label>
        <Form.Control as="textarea" rows="3" name="bio" value={this.state.bio} onChange={this.handleChange}/>
      </Form.Group>

    <Button bsStyle="primary" type="submit" value="New Entry">New Entry</Button>

    </Form>
   )
  }
}

export default CreatorForm

// export default CreatorForm = withRouter(connect(null, { createCreator })(CreatorForm));

import React, { Component } from 'react';
import {Button,Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { withRouter, Redirect } from 'react-router-dom'
import { createCreator } from '../../actions/creatorActions'



class CreatorForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      creator_name: "",
      image: null,
      platform: "",
      bio: "",
      category: "",
      redirect: false
    }

  }

  handleChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   }

   onDrop = (acceptedFiles) => {
     console.log(acceptedFiles[0]);

     this.setState({
        image: acceptedFiles[0]
     });
   }

   handleSubmit = event => {
     event.preventDefault()

     const creator= new FormData();
     creator.append('[creator]creator_name', this.state.creator_name)
     creator.append('[creator]image', this.state.image)
     creator.append('[creator]platform', this.state.platform)
     creator.append('[creator]bio', this.state.bio)
     creator.append('[creator]category', this.state.category)

     this.props.createCreator(creator)
     
     this.setState({
       redirect: true
     })
   }

   render() {
     if (this.state.redirect === true){
       this.setState({
         redirect: false})
       return <Redirect to="/" />
     }
     return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Creator Name:</Form.Label>
      <Form.Control type="text" name="creator_name" value={this.state.creator_name} onChange={this.handleChange}/>

      <Form.Label>Image:</Form.Label>
        <div className="text-center mt-5">
          <Dropzone onDrop={this.onDrop} accept="image/png, image/gif,image/jpg,image/jpeg" >

            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                Click me to upload a file!
              </div>
            )}
          </Dropzone>
        </div>

      <Form.Label>Platform:</Form.Label>
      <Form.Control type="text" name="platform" value={this.state.platform} onChange={this.handleChange}/>

      <Form.Label>Category:</Form.Label>
      <Form.Control type="text" name="category" value={this.state.category} onChange={this.handleChange}/>

      </Form.Group>


      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio:</Form.Label>
        <Form.Control as="textarea" rows="3" name="bio" value={this.state.bio} onChange={this.handleChange}/>
      </Form.Group>

    <Button variant="primary" type="submit" value="New Entry">New Entry</Button>

    </Form>
   )
  }
}


export default connect(null, { createCreator })(CreatorForm);

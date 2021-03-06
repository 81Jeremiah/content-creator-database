import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { search } from '../../actions/searchActions';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



 class CreatorSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
    query: "",
    redirect: false
  }
}

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault()

    this.props.search(this.state.query)
    this.setState({
      query: "",
      redirect: true})
  }
//redirects to search page once submit button clicked
  render() {
    if (this.state.redirect === true){
      this.setState({
        query: "",
        redirect: false})
      return <Redirect to="/searchresults" />
    }
    return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" placeholder="Search"
        className="mr-sm-2" value={this.state.query}  onChange={this.handleChange}/>
        <Button type="submit"  variant="outline-success">Search</Button>
      </Form>


    )

  }

}

export default connect(null, {search})(CreatorSearch);

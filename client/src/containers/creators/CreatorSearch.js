import React, { Component } from 'react';
import SearchResults from '../../components/creators/SearchResults'
import { Button, FormControl, Form } from 'react-bootstrap';
import { search } from '../../actions/searchActions';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

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

  handleClick = () =>{
    this.props.search(this.state.query)
    this.setState({
      query: "",
      redirect: true})
  }

  componentWillUnmount() {
    this.setState({
      redirect: false})    ;
    }

  render() {
    if (this.state.redirect === true){
      this.setState({
        query: "",
        redirect: false})
      return <Redirect to="/searchresults" />
    }
    return(
      <Form inline>
        <FormControl type="text" placeholder="Search"
        className="mr-sm-2" value={this.state.query}  onChange={this.handleChange}/>
        <Button onClick={this.handleClick} variant="outline-success">Search</Button>
      </Form>


    )

  }

}

export default connect(null, {search})(CreatorSearch);

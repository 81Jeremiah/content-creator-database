import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatorSearch from '../containers/creators/CreatorSearch'

class NavigationBar extends Component {

  handleLogout = () => {
    this.props.logout()
  }

const

render() {
//brand logo
  const logo = (
    <Link to="/"   className="CCDB-logo">
            <span>C</span>
            <span>C</span>
            <span>D</span>
            <span>B</span>

          <br/>Content Creator Database

    </Link>
  )
//links used by both navbar options
  const linksForAll =
    <div>
      <Link to="/" className="btn btn-md btn-outline-secondary" roll="button">Home</Link>
      <Link to="/about" className="btn btn-md btn-outline-secondary" roll="button">About</Link>
    </div>

  const guestView = (
    <div>
    <Navbar  bg="light" expand="lg" >

            <Navbar.Brand>
                  { logo }
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">
                {linksForAll}
                <Link to="/login" className="btn btn-md btn-outline-secondary">Login</Link>
                <Link to="/signup" className="btn btn-md btn-outline-secondary" roll="button">SignUp</Link>

            </Nav>
             <CreatorSearch />
        </Navbar.Collapse>
    </Navbar>
    </div>
  )

  const userView = (
    <div>
    <Navbar  bg="light" expand="lg" >

      <Navbar.Brand>
         { logo }
      </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">
                {linksForAll}
                <Link to="/new" className="btn btn-md btn-outline-secondary">New</Link>
                <Button className="btn btn-md btn-outline-secondary " variant="outline-dark" onClick={this.handleLogout}> Logout </Button>
            </Nav>
              <CreatorSearch />
        </Navbar.Collapse>
    </Navbar>
    </div>
  )

  return(
    <nav >
      {this.props.isAuthenticated ? userView : guestView}
    </nav>
  )
 }
}


export default connect(null, { logout })(NavigationBar)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/userActions';
import { Navbar, Nav, NavItem, Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatorSearch from '../containers/creators/CreatorSearch'

class NavigationBar extends Component {

  handleLogout = () => {
    this.props.logout()
  }


render() {
  const guestView = (
    <div>
    <Navbar  bg="light" expand="lg" >

            {/* <Navbar.Brand> */}

            {/* </Navbar.Brand> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">
                <div class="CCDB-logo">
                      <span>C</span>
                      <span>C</span>
                      <span>D</span>
                      <span>B</span>

                    <br/>Content Creator Database
                  </div>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/signup">SignUp</Link></Nav.Link>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>

            </Nav>
             <CreatorSearch />
        </Navbar.Collapse>
    </Navbar>
    </div>
  )

  const userView = (
    <div>
    <Navbar  bg="light" expand="lg" >


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="tabs" className="mr-auto">


                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/new">New</Link></Nav.Link>
              <Button onClick={this.handleLogout}> Logout </Button>
            </Nav>
              <CreatorSearch />
        </Navbar.Collapse>
    </Navbar>
    </div>
  )

  return(
    <nav > {this.props.isAuthenticated ? userView : guestView}

    </nav>
  )
 }
}


export default connect(null, { logout })(NavigationBar)

import React from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'



const Routes = () => (
    <Router>
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/login">Login/Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/home">Home</Link></NavItem>
                        <NavItem><Link to="/new">New</Link></NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div class='container'>
                <Route exact path="/login" component={login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/new" component={new}/>
            </div>
        </div>
    </Router>
)

export default Routes

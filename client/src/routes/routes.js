import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Navbar, Nav, NavItem, Button, FormControl, Form } from 'react-bootstrap';
import CreatorForm  from '../components/creators/CreatorForm';
import TopCreators from '../components/creators/TopCreators';
import CreatorPage from '../components/creators/CreatorPage';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';

const Routes = props => {

    const something = (
        <div>
          <div className='container'>
            <Navbar  bg="light" expand="lg" >

                    {/* <Navbar.Brand> */}

                    {/* </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav variant="tabs" className="mr-auto">

                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/new">New</Link></Nav.Link>

                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
               <Route exact path="/new" component={CreatorForm}/>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/Signup" component={SignUp}/>
               <Route exact path="/" component={TopCreators}/>
               <Route exact path="/creators/:id" component={CreatorPage} />
            </Switch>
            </div>
        </div>
    )

      return (
      <Router>
         { something }
      </Router>
  )
}

export default Routes

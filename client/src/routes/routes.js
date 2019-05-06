import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import  CreatorForm  from '../components/creators/CreatorForm';
import  TopCreators from '../components/creators/TopCreators';
import CreatorPage from '../components/creators/CreatorPage'
import Login from '../containers/Login'
const Routes = props => {

    const something = (
        <div>
            <Navbar collapseOnSelect>

                    <Navbar.Brand>
                        <Link to="/login">Login</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/">Home</Link></NavItem>
                        <NavItem><Link to="/new">New</Link></NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='container'>
            <Switch>
               <Route exact path="/new" component={CreatorForm}/>
               <Route exact path="/login" componet={Login}/>
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

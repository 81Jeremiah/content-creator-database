import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatorForm  from '../components/creators/CreatorForm';
import TopCreators from '../components/creators/TopCreators';
import CreatorPage from '../components/creators/CreatorPage';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import NavigationBar from './NavigationBar';
import SearchResults from '../components/creators/SearchResults'
import About from '../components/static/About'

const Routes = props => {


  const guest = (

  <div className='container'>
    <NavigationBar isAuthenticated={props.isAuthenticated}/>
    <Switch>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/Signup" component={SignUp}/>
       <Route exact path="/" component={TopCreators}/>
       <Route exact path="/creators/:id" component={CreatorPage} />
       <Route exact path="/searchresults" component={SearchResults} />
       <Route exact path="/about" component={About} />
    </Switch>
  </div>
)
  const loggedIn = (
  <div className='container'>
       <NavigationBar isAuthenticated={props.isAuthenticated}/>
       <Switch>
          <Route exact path="/new" component={CreatorForm}/>
          <Route exact path="/" component={TopCreators}/>
          <Route exact path="/creators/:id" component={CreatorPage} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/about" component={About} />
       </Switch>
    </div>)


      return (
        <Router>
            {props.isAuthenticated ? loggedIn : guest}
        </Router>
  )
}

export default Routes

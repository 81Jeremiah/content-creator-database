import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatorForm  from '../components/creators/CreatorForm';
import CreatorsContainer from '../containers/creators/CreatorsContainer';
import CreatorPage from '../containers/creators/CreatorPage';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import NavigationBar from './NavigationBar';
import SearchResults from '../components/creators/SearchResults'
import About from '../components/static/About'

const Routes = props => {
//only allows new route if logged in
let customRoutes = ""
  if (props.isAuthenticated){
    customRoutes =
   <Route exact path="/new" component={CreatorForm}/>
} else {
  customRoutes =
  <div>
   <Route exact path="/login" component={Login}/>
   <Route exact path="/Signup" component={SignUp}/>
  </div>
}
      return (
        <Router>
          <div className='container'>

              <NavigationBar isAuthenticated={props.isAuthenticated}/>
              <Switch>
                 <Route exact path="/" component={CreatorsContainer}/>
                 <Route exact path="/creators/:id" component={CreatorPage} />
                 <Route exact path="/searchresults" component={SearchResults} />
                 <Route exact path="/about" component={About} />
                 {customRoutes}
              </Switch>
          </div>
        </Router>
      )
}
export default Routes

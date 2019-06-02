import React, { Component } from 'react';
import { connect } from 'react-redux'
import { checkToken } from './actions/userActions';

import Routes from './routes/Routes';


class App extends Component {

  componentWillMount = () => {
    if (localStorage.getItem("token")) {
    console.log(localStorage.getItem("auth_token"))
    this.props.checkToken(localStorage.getItem("token"))
    }
  }

  render() {
    const {isAuthenticated, user} = this.props
    return (
      <div className="App">

       <Routes isAuthenticated={isAuthenticated} user={user}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser,

  }
}



export default connect(mapStateToProps, { checkToken})(App)

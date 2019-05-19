import React, { Component } from 'react';
import { connect } from 'react-redux'

import Routes from './routes/Routes';


class App extends Component {

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

export default connect(mapStateToProps)(App)

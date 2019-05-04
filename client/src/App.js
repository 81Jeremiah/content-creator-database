import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCreators } from './actions/creatorActions';
import Creators from './containers/creators/Creators';
import Routes from './routes/routes';


class App extends Component {

  componentDidMount(){
    this.props.fetchCreators()

  }

  render() {
    return (
      <div className="App">
        <Routes />


        // <Creators creatorObjects={this.props.creators}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creators: state.creators
   }
 }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCreators: () => dispatch(fetchCreators())
//     }
//   }
export default connect(mapStateToProps, { fetchCreators })(App);

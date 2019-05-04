import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

import Routes from './routes/Routes';


class App extends Component {

  render() {
    return (
      <div className="App">

       <Routes />

      </div>
    );
  }
}

export default App

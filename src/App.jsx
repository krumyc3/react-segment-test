import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Homepage } from 'pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Homepage />;
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Forms';
import readAll from './models/readAll';
import addContest from './models/addContest';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: null,
    };
  }

  componentDidMount() {
    readAll().then((results) => {
      this.setState({
        contests: results,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

// <Route path="/about" component={About} />

export default App;

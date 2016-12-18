import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
              <div className="logo">Github-Search</div>
          </div>
          <div className="App-intro">
              {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

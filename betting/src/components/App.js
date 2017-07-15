import React, { Component } from 'react';
import '../App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Toolbar from './Toolbar'
import BetPage from './BetPage/BetPage'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: 'calc(100% - 200px)' }}>
          <div className="App" style={{ height: '100vh', width: '100%' }}>
            <Toolbar />
            <BetPage />
          </div>
          <div className="background"></div>
      </div>
    );
  }
}

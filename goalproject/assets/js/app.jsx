import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import GoalList from './GoalList';
import CreateGoal from './CreateGoal';
import './../css/app.css';


class HomePage extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
              style={{position: 'fixed'}}
              className="app-bar"
              title="Goal App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <GoalList />
          <CreateGoal />
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = HomePage;
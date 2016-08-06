import React from 'react';
import request from 'superagent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import GoalList from './GoalList';
import CreateGoal from './CreateGoal';
import {GOALS_URL} from './urls';
import './../css/app.css';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {goals: []};
  }

  loadGoals() {
    request
    .get(GOALS_URL)
    .end(function(err, res){
      if(err)
        console.log("Could not retrieve goals from server. " + err);
      else
        this.setState({ goals: JSON.parse(res.text) });
    }.bind(this));
  }

  submitGoal(title) {
    request
    .post(GOALS_URL)
    .send({title: title})
    .end(function(err, res){
      if(err)
        console.log("Could not create goal. " + err);
      else
        this.loadGoals();
    }.bind(this));
  }

  componentDidMount() {
    this.loadGoals();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={{position: 'fixed'}}
            title="Goal App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <GoalList goals={this.state.goals} />
          <CreateGoal submitGoal={this.submitGoal.bind(this)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = HomePage;
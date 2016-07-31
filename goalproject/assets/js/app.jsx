import React from 'react';
import request from 'superagent';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';

import Goal from './Goal';
import {GOALS_LIST_URL} from './urls';


class GoalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {goals: []};
    }

    loadGoals() {
        request
        .get(GOALS_LIST_URL)
        .end(function(err, res){
            if (err)
                console.log("Could not retrieve goals_list" + err);
            else
                this.setState({ goals: JSON.parse(res.text).goals });
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
                        title="GoalApp"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Paper zDepth={3}>
                        <List>
                        {
                            this.state.goals.map(
                                goal => (<Goal title={goal.title} key={goal.id}></Goal>)
                            )
                        }
                        </List>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

module.exports = GoalList;
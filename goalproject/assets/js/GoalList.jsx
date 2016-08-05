import React from 'react';
import request from 'superagent';
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
                this.setState({ goals: JSON.parse(res.text) });
        }.bind(this));
    }

    componentDidMount() {
        this.loadGoals();
    }

    render() {
        return (
                <Paper zDepth={0} className="paper">
                    {
                        this.state.goals.map(
                            goal => (<Goal title={goal.title} key={goal.id}></Goal>)
                        )
                    }
                </Paper>
        );
    }
}

module.exports = GoalList;
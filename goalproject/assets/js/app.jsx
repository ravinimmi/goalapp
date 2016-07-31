import React from 'react'
import request from 'superagent'
import {GOALS_LIST_URL} from './urls'

var Goal = React.createClass({
    render: function() {
        return <li> {this.props.title} </li>;
    }
});


var GoalList = React.createClass({
    getInitialState: function() {
        return {goals: []};
    },

    loadGoals: function() {
        request
        .get(GOALS_LIST_URL)
        .end(function(err, res){
            if (err)
                console.log("Could not retrieve goals_list" + err);
            else
                this.setState({ goals: JSON.parse(res.text).goals });
        }.bind(this));
    },

    componentDidMount: function() {
        this.loadGoals();
    },

    render: function() {
        return (
            <ul>
                {
                    this.state.goals.map(
                        goal => (<Goal title={goal.title} key={goal.id}></Goal>)
                    )
                }
            </ul>
        );
    }
});

module.exports = GoalList;
import React from 'react';
import Paper from 'material-ui/Paper';

import Goal from './Goal';


class GoalList extends React.Component {
  render() {
    return (
            <Paper zDepth={0} className="paper">
              {
                this.props.goals.map(
                  goal => (
                           <Goal 
                             title={goal.title}
                             startDate={goal.start_date}
                             finishDate={goal.end_date}
                             key={goal.id}
                             id={goal.id}
                             deleteGoal={this.props.deleteGoal}
                             >
                           </Goal>)
                  )
              }
            </Paper>
    );
  }
}

module.exports = GoalList;
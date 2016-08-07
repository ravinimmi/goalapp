import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shadow: 1};
  }

  onMouseOver = () => { this.setState({shadow: 2}); };
  
  onMouseOut = () => { this.setState({shadow: 1}); };

  onDelete = () => { this.props.deleteGoal(this.props.id); }

  render() {
    return (
            <Card
              className="card"
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              zDepth={this.state.shadow}
            >
              <CardHeader
                title={this.props.title}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText actAsExpander={true}>
                <div>
                  Start date: {new Date(this.props.startDate).toLocaleDateString()}
                </div>
                <div>
                  Finish date: {new Date(this.props.finishDate).toLocaleDateString()}
                </div>
              </CardText>
              <CardActions expandable={true}>
                <RaisedButton
                  label="Delete"
                  primary={true}
                  className="delete-goal-btn"
                  onTouchTap={this.onDelete}
                />
              </CardActions>
            </Card>
    );
  }
}

module.exports = Goal;
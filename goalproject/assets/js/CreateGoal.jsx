import React from 'react';
import request from 'superagent';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import {GOALS_URL} from './urls';


class CreateGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, title: ''};
  }

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  handleTextFieldChange = (e) => {
    this.setState({title: e.target.value});
  };

  handleSubmit = () => {
    request
    .post(GOALS_URL)
    .send({title: this.state.title})
    .end(function(err, res){
      if(err)
        console.log("Could not create goal " + err);
      else
        this.handleClose();
    }.bind(this));
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <FloatingActionButton className="create-goal" onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Create Goal"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField 
            hintText="Goal Title"
            value={this.state.title}
            onChange={this.handleTextFieldChange}
          />
        </Dialog>
      </div>
    );
  }
}

module.exports = CreateGoal;
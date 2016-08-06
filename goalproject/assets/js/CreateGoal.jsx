import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


class CreateGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, title: ''};
  }

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false, title: ''});
  };

  handleTextFieldChange = (e) => {
    this.setState({title: e.target.value});
  };

  handleSubmit() {
    this.props.submitGoal(this.state.title);
    this.handleClose();
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
        onTouchTap={this.handleSubmit.bind(this)}
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
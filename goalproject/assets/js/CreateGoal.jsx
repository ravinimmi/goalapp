import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


class CreateGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, title: '', startDate: new Date(), finishDate: ''};
  }

  handleOpen = () => {
    this.setState({open: true, title: '', startDate: new Date(), finishDate: ''});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };

  handleTextFieldChange = (e) => {
    this.setState({title: e.target.value});
  };

  handleStartDateChange = (n, date) => {
    this.setState({startDate: date});
  };

  handleFinishDateChange = (n, date) => {
    this.setState({finishDate: date});
  };

  handleSubmit() {
    var data = {
      title: this.state.title,
      start_date: this.state.startDate,
      end_date: this.state.finishDate
    };
    this.props.submitGoal(data);
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
          <DatePicker
            hintText="Start Date"
            value={this.state.startDate}
            onChange={this.handleStartDateChange}
          />
          <DatePicker
            hintText="Finish Date"
            value={this.state.finishDate}
            onChange={this.handleFinishDateChange}
          />
        </Dialog>
      </div>
    );
  }
}

module.exports = CreateGoal;
import React from 'react';
import {ListItem} from 'material-ui/List';
import {Card, CardHeader} from 'material-ui/Card';

class Goal extends React.Component {
    render() {
        return (
            <ListItem>
                <Card>
                    <CardHeader
                      title={this.props.title}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                </Card>
            </ListItem>
        );
    }
}

module.exports = Goal;
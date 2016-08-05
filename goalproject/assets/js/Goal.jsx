import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';


class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shadow: 1};
    }

    onMouseOver = () => { this.setState({shadow: 2}); }
    
    onMouseOut = () => { this.setState({shadow: 1}); }

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
                    />
                </Card>
        );
    }
}

module.exports = Goal;
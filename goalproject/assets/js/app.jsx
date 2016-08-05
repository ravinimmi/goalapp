import React from 'react';
import request from 'superagent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import GoalList from './GoalList';
import './../css/app.css';


class HomePage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        style={{position: 'fixed'}}
                        className="app-bar"
                        title="Goal App"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <GoalList />
                </div>
            </MuiThemeProvider>
        );
    }
}

module.exports = HomePage;
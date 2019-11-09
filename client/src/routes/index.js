import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../screens/Main';
import Dashboard from '../screens/Dashboard';

import history from '../services/history';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/dashboard" isPrivate>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
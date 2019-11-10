import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../screens/Main';
import Dashboard from '../screens/Dashboard';

import history from '../services/history';
import SingUp from '../components/common/SingUp';
import Profile from '../components/Settings';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/singup">
                    <SingUp />
                </Route>
                <Route path="/dashboard" isPrivate>
                    <Dashboard />
                </Route>
                <Route path="/profile" isPrivate>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
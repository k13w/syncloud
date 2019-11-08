import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './screens/Main';
import Dashboard from './screens/Dashboard';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
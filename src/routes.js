import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Panel from './components/Panel/index';
import Dashboard from './screens/Dashboard';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Panel />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
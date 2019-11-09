import React from "react";
import GlobalStyles from './assets/css/index';
import Routes from "./routes/index";
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import store from './store';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <GlobalStyles />
                <Routes />
            </Provider>
        </>
    )
}

export default App;
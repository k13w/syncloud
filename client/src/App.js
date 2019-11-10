import React from "react";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyles from './assets/css/index';

import './config/reactotronConfig';

import Routes from "./routes/index";
import { Provider } from 'react-redux';

import { store, persistor }  from './store/index';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                    <Routes />
                </PersistGate>
            </Provider>
        </>
    )
}

export default App;
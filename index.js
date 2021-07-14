/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import store from './src/Redux/Store'
import {Provider} from 'react-redux'

const MainApp=()=>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => MainApp);

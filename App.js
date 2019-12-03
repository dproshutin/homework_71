import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import reducer from './store/reducer';
import Main from "./containers/Main";
const store = createStore(reducer);

const Application = () => (
    <Provider store={store}>
      <Main />
    </Provider>
);

AppRegistry.registerComponent('rncourse', () => Application);


export default Application
/* eslint-env browser */

import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';

import Store from './store/store';

import App from './App.jsx';

render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main.jsx';
import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

let store = createStoreWithMiddleware(reducers);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

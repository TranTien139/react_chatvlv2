import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'

import Main from './components/main.jsx';
import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers);

// console.log(store.getState());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { startSetTodos } from './actions';
import reducer from './reducers';
import Router from './router';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(
        applyMiddleware(thunk, logger)
    )
);

store.dispatch(startSetTodos()).then(() => {
    ReactDOM.render(
        <Provider store={store} >
            <Router />
        </Provider>
        , document.getElementById('app'));
});


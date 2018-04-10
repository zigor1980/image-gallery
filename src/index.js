import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function middleware({ dispatch, getState }) {
    return next => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(middleware)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();

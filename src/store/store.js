import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// REMOTE MIDDLWARES
import logger from 'redux-logger'



export default function configStore(initialState) {

    const store = createStore(

        rootReducer,
        applyMiddleware(logger, thunk),
        initialState,
        compose(window.devToolsExtension ? window.devToolsExtension() : f => f),

    );

    return  store;
}
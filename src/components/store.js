import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import {countReducer,userReducer} from './reducer';

const store = createStore(combineReducers({ 
        countReducer, 
        userReducer 
    }),
    {},
    applyMiddleware(createLogger())
    );




export default store;
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadJobReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducer';

// Combine Reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer
});

// Intital State
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
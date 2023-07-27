import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadJobReducer, loadJobSingleReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducer';
import { allUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducers/userReducer';

// Combine Reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    LogOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    userSignUp: userReducerSignUp
});

// Intital State
let initialState = {
   signIn:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null
   }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
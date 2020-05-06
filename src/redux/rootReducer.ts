import { combineReducers } from 'redux';
// @ts-ignore
import { sessionReducer } from 'redux-react-session';

const reducers = {
    // session: sessionReducer
}

export default combineReducers(reducers)
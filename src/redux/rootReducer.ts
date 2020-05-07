import { combineReducers } from 'redux';
// @ts-ignore
// import { sessionReducer } from 'redux-react-session';
import reposReducer from './repos/repo.reducer'

const reducers = {
    // session: sessionReducer
    repos: reposReducer
}

export default combineReducers(reducers)
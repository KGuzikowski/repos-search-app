import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// @ts-ignore
// import { sessionReducer } from 'redux-react-session';
import reposReducer from './repos/repo.reducer'

const reducers = {
    // session: sessionReducer
    repos: reposReducer
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['repos']
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
export default persistReducer(persistConfig, rootReducer)
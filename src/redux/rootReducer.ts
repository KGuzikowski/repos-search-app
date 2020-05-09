import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reposReducer from './repos/repo.reducer'
import userReducer from './user/user.reducer'

const reducers = {
    repos: reposReducer,
    user: userReducer
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['repos', 'user']
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
export default persistReducer(persistConfig, rootReducer)
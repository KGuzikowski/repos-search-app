import { createStore, applyMiddleware } from 'redux'
// @ts-ignore
// import { sessionService } from 'redux-react-session'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import  thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

// sessionService.initSessionService(store)

export default store
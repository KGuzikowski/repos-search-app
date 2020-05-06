import { createStore } from 'redux';
// @ts-ignore
import { sessionService } from 'redux-react-session';
import rootReducer from './rootReducer';


const store = createStore(rootReducer)

// sessionService.initSessionService(store)

export default store
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';
import MainPage from './ui/pages/MainPage/MainPage'
import './index.css'
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path='/'>
            <MainPage />
          </Route>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

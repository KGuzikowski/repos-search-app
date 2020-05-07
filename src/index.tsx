import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './ui/pages/MainPage/MainPage'
import './index.css'
import 'typeface-roboto'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Route exact path='/'>
        <MainPage />
      </Route>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

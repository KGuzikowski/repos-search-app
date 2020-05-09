import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store';
import MainPage from './pages/MainPage/MainPage'
import CallbackPage from './pages/CallbackPage/CallbackPage'
import '../index.css'
import 'typeface-roboto'

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/callback' component={CallbackPage} />
                        <Redirect to='/'/>
                    </Switch>
                </Router>
            </PersistGate>
            </Provider>
        </React.StrictMode>
    )
}

export default App

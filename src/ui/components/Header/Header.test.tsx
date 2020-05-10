import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Header from './Header'
import { userStateType } from '../../../redux/user/user.types'

it('renders Header component correctly', () => {
    const INITIAL_STATE: userStateType = {
        isFetching: false,
        accessToken: 'a22',
        errorMessage: '',
        user: {
            id: 1,
            login: 'Karol'
        }
    }

    const mockStore = configureStore()
    const store = mockStore(INITIAL_STATE)

    const component = create(<Provider store={store}><Header /></Provider>)
    expect(component.toJSON()).toMatchSnapshot()
})
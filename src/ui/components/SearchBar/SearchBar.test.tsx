import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SearchBar from './SearchBar'
import { reposStateType } from '../../../redux/repos/repo.types'

it('renders SearchBar component correctly', () => {
    const repo = {
        id: 1,
        name: 'repo',
        owner: { id: 1, name: 'Karol' },
        stars: 2,
        createdAt: '2019-05-12'
    }

    const INITIAL_STATE: reposStateType = {
        repos: [repo],
        isFetching: false,
        errorMessage: '',
        name: 'react',
        pagination: 5,
        page: 1,
    }

    const mockStore = configureStore()
    const store = mockStore(INITIAL_STATE)

    const component = create(<Provider store={store}><SearchBar /></Provider>)
    expect(component.toJSON()).toMatchSnapshot()
})
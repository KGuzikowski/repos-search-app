import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TableSection from './TableSection'
import { reposStateType } from '../../../redux/repos/repo.types'

it('renders TableSection component correctly', () => {
    const repo = {
        id: 1,
        name: 'repo',
        owner: { id: 1, name: 'Karol' },
        stars: 2,
        createdAt: '2019-05-12'
    }

    const props = {
        user: null,
        repos: [repo],
        reposNum: 1,
        start: 1,
        end: 1
    }

    const INITIAL_STATE: reposStateType = {
        repos: [repo],
        isFetching: false,
        errorMessage: '',
        name: '',
        pagination: 5,
        page: 1,
    }

    const mockStore = configureStore()
    const store = mockStore(INITIAL_STATE)

    const component = create(<Provider store={store}><TableSection {...props} /></Provider>)
    expect(component.toJSON()).toMatchSnapshot()
})
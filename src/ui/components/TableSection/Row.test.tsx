import React from 'react'
import { create } from 'react-test-renderer'
import Row from './Row'

it('renders Row component correctly', () => {
    const repo = {
        id: 1,
        name: 'repo',
        owner: { id: 1, name: 'Karol' },
        stars: 2,
        createdAt: '2019-05-12'
    }
    const component = create(<Row repo={repo} highlighted />)
    expect(component.toJSON()).toMatchSnapshot()
})
import React from 'react'
import { create } from 'react-test-renderer'
import Spinner from './Spinner'

it('renders Spinner component correctly', () => {
    const component = create(<Spinner />)
    expect(component.toJSON()).toMatchSnapshot()
})
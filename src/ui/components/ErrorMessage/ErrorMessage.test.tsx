import React from 'react'
import { create } from 'react-test-renderer'
import ErrorMessage from './ErrorMessage'

it('renders ErrorMessage component correctly', () => {
    const component = create(<ErrorMessage>Testing</ErrorMessage>)
    expect(component.toJSON()).toMatchSnapshot()
})
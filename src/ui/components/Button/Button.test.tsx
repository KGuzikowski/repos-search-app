import React from 'react'
import { create } from 'react-test-renderer'
import Button from './Button'

it('renders Button component correctly', () => {
    const component = create(<Button>Testing</Button>)
    expect(component.toJSON()).toMatchSnapshot()
})
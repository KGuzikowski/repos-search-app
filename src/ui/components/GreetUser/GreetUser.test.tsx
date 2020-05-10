import React from 'react'
import { create } from 'react-test-renderer'
import GreetUser from './GreetUser'

it('renders GreetUser component correctly', () => {
    const component = create(<GreetUser user='Karol' />)
    expect(component.toJSON()).toMatchSnapshot()
})
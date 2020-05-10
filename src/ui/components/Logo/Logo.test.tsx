import React from 'react'
import { create } from 'react-test-renderer'
import Logo from './Logo'

it('renders Logo component correctly', () => {
    const component = create(<Logo />)
    expect(component.toJSON()).toMatchSnapshot()
})
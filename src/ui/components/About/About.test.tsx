import React from 'react'
import { create } from 'react-test-renderer'
import About from './About'

it('renders About component correctly', () => {
    const about = create(<About>Testing</About>)
    expect(about.toJSON()).toMatchSnapshot()
})
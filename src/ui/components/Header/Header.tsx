import React from 'react'
import { HeaderTag, NavBar, LoginButton } from './Header.styles'
import Logo from '../Logo/Logo'

const Header = () => (
    <HeaderTag>
        <NavBar>
            <Logo />
            <LoginButton>Login with GitHub</LoginButton>
        </NavBar>
    </HeaderTag>
)

export default Header
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../redux/user/user.actions'
import { RootState } from '../../../redux/rootReducer'
import { HeaderTag, NavBar } from './Header.styles'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

const Header = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(logout())
    }
    
    const href = `https://github.com/login/oauth/authorize?scope=read:user&client_id=${process.env.REACT_APP_CLIENT_ID}`
    return (
        <HeaderTag>
            <NavBar>
                <Logo />
                { !user.accessToken
                    ? <Button href={href}>Log in with GitHub</Button>
                    : <Button onClick={e => handleLogout(e)}>Log out</Button>
                }
            </NavBar>
        </HeaderTag>
    )
}

export default Header
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderTag = styled.header`
    padding: 20px 100px;
    background: ${primaryColor};
`

export const LoginButton = styled.button`
    border: 1px solid ${secondaryColor};
    font-size: 15px;
    padding: 10px 20px;
    background: ${secondaryColor};
    color: ${primaryColor};
    cursor: pointer;
    font-weight: bold;
    transition: color, background 200ms ease-in;

    &:hover {
        color: #fff;
        background: transparent;
    }
`
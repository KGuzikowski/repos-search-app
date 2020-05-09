import styled from 'styled-components'
import { primaryColor } from '../../style-variables'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
    }
`
export const HeaderTag = styled.header`
    padding: 20px 100px;
    background: ${primaryColor};

    @media only screen and (max-width: 700px) {
        padding: 10px 50px;
    }
`
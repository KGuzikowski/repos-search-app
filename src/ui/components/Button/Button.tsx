import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

const reversed = `
    background: ${primaryColor};
    color: ${secondaryColor};
    border: 2px solid ${primaryColor};
`

const normal = `
    background: ${secondaryColor};
    color: ${primaryColor};
    border: 1px solid ${secondaryColor};
`

const Button = styled.a<{reversed?: boolean}>`
    text-decoration: none;
    font-size: 15px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    transition: color, background 200ms ease-in;

    ${props => props.reversed ? reversed : normal}

    &:hover {
        color: ${props => props.reversed ? primaryColor : '#fff'};
        background: transparent;
    }
`

export default Button
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

const Button = styled.a`
    border: 1px solid ${secondaryColor};
    text-decoration: none;
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

export default Button
import styled from 'styled-components'
import { secondaryColor, secondaryDarkerColor } from '../../style-variables'

const Button = styled.button`
    border: none;
    font-size: 15px;
    padding: 10px 20px;
    background: ${secondaryColor};
    color: #000;
    cursor: pointer;
    transition: background 200ms ease-in;

    &:hover {
        background: ${secondaryDarkerColor};
    }
`
export default Button
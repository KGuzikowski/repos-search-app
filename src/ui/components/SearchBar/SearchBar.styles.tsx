import styled from 'styled-components'
import { secondaryColor } from '../../style-variables'

export const Input = styled.input`
    padding 10px 20px;
    outline: none;
    font-size: 16px;
    border-color: #ccc;
    width: 500px;
    border: 1px solid #ccc;

    &:focus {
        border-color: ${secondaryColor};
    }
`

export const Form = styled.form`
    display: flex;
    // justify-content: space-around;
`
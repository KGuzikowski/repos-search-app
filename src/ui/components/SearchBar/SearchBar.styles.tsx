import styled from 'styled-components'
import { secondaryColor } from '../../style-variables'
import { ReactComponent as Icon } from './search.svg'

export const Input = styled.input`
    padding 15px 20px 15px 60px;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    border-color: #ccc;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;

    &:focus {
        border-color: ${secondaryColor};
    }
`

export const Form = styled.form`
    margin-top: 20px;
    margin-bottom: 50px;
    width: 600px;
    
    @media only screen and (max-width: 700px) {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 0px;
    }
`

export const SearchIcon = styled(Icon)`
    position: absolute;
    padding-top: 9px;
    padding-left: 12px;
    height: 35px;
    width: 35px;
`
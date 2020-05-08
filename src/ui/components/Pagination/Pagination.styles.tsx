import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

export const PaginationChangerContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`

export const OptionSelect = styled.select`
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${secondaryColor};
    color: ${primaryColor};
    font-size: 20px;
    padding: 5px 0px 5px 10px;
    transition: color, background 0.1s linear;

    &:hover {
        color: #fff;
        background: ${primaryColor};
    }
`

export const PaginationChangerText = styled.p`
    font-size: 18px;
    margin-right: 20px;
`

export const PageChangerContainer = styled(PaginationChangerContainer)`
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
    color: ${primaryColor};
`

export const Option = styled.p<{current: boolean}>`
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    ${props => props.current ? `color: ${secondaryColor};`: ''}

    &:hover {
        color: ${secondaryColor};
    }
`

export const Dots = styled.div`
    padding: 5px 10px;
    font-size: 18px;
`

export const Of = styled.p`
    padding: 5px 5px 5px 10px;
    font-size: 18px;
`

export const OptionsDiv = styled.div`
    display: flex;
    align-items: center;
`
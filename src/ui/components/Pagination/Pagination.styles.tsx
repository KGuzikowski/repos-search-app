import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

const css = `
    display: flex;
    align-items: center;
    font-size: 16px;
`

export const PaginationChangerContainer = styled.div`
    ${css}

    @media only screen and (max-width: 700px) {
        margin-top: 10px;
    }
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

    @media only screen and (max-width: 700px) {
        font-size: 16px;
    }
`

export const PaginationChangerText = styled.p`
    font-size: 18px;
    margin-right: 20px;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
        margin-right: 10px;
    }
`

export const PageChangerContainer = styled.div`
    ${css}
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
    color: ${primaryColor};
    @media only screen and (max-width: 700px) {
        margin-top: 15px;
    }
`

export const Option = styled.p<{current: boolean}>`
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    ${props => props.current ? `color: ${secondaryColor};`: ''}

    &:hover {
        color: ${secondaryColor};
    }

    @media only screen and (max-width: 700px) {
        padding: 3px 5px;
        font-size: 16px;
    }
`

export const Dots = styled.div`
    padding: 5px 10px;
    font-size: 18px;
    @media only screen and (max-width: 700px) {
        padding: 3px 5px;
        font-size: 16x;
    }
`

export const Of = styled.p`
    padding: 5px 5px 5px 10px;
    font-size: 18px;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
    }
`

export const OptionsDiv = styled.div`
    display: flex;
    align-items: center;
`
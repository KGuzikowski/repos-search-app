import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'
import { ReactComponent as ArrowIcon } from './arrow_down.svg'

const css = `
    fill: ${primaryColor};
    cursor: pointer;
    width: 30px;
    height: 30px;
    transition: fill 100ms ease-in;

    &:hover {
        fill: ${secondaryColor};
    }
`

export const ArrowDown = styled(ArrowIcon)`
    margin-top: -5px;
    ${css}
`

export const ArrowRight = styled(ArrowIcon)`
    ${css}
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
`

export const ArrowLeft = styled(ArrowIcon)`
    ${css}
    width: 40px;
    height: 40px;
    transform: rotate(90deg);
`

export const ArrowUp = styled(ArrowIcon)`
    transform: rotate(180deg);
    margin-bottom: -5px;
    ${css}
`

export const ArrowsDiv = styled.div`
    display: flex;
    flex-direction: column;
    // justify
`
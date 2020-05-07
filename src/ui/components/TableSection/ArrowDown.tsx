import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'
import { ReactComponent as ArrowIcon } from './arrow_down.svg'

const ArrowDown = styled(ArrowIcon)`
    fill: ${primaryColor};
    cursor: pointer;
    width: 40px;
    height: 40px;
    transition: fill 100ms ease-in;

    &:hover {
        fill: ${secondaryColor};
    }
`

export default ArrowDown
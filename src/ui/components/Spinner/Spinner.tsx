import styled, { keyframes } from 'styled-components'
import SpinnerIcon from './spinner.svg'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.img.attrs({
    src: SpinnerIcon,
  })`
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation: ${rotate} 1.2s linear infinite;
`

export default Spinner
import styled from 'styled-components'
import { secondaryColor } from '../../style-variables'

export const GreetDiv = styled.div`
    width: 100%;
    margin: 0px 0px 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 700px) {
        margin: 0 0 20px 0;
    }
`

export const Greet = styled.p`
    font-weight: bold;
    color: ${secondaryColor};
    font-size: 30px;

    @media only screen and (max-width: 700px) {
        font-size: 25px;
    }
`

export const Info = styled.p`
    margin-top: 10px;
    font-size: 19px;

    @media only screen and (max-width: 700px) {
        font-size: 15px;
        margin-top: 5px;
    }
`
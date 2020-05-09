import styled from 'styled-components'
import { secondaryColor } from '../../style-variables'

export const AcceptPoints = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    padding: 20px;
    background: ${secondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AcceptPointsMessage = styled.p`
    font-size: 20px;
    margin-right: 20px;

    @media only screen and (max-width: 500px) {
        font-size: 16px;
        padding: 10px 10px;
    }
`
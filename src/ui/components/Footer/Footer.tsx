import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../style-variables'

const FooterDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 30px 20px;
    font-size: 20px;
    text-align: center;
    background: ${primaryColor};
    color: #fff;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
        padding: 20px 10px;
    }
`

const Name = styled.span`
    color: ${secondaryColor};
`

const Footer = () => {
    return (
        <FooterDiv>
            Let's search for repositories! App made for recruitment purposes by <Name>Karol Guzikowski</Name>.
        </FooterDiv>
    )
}

export default Footer
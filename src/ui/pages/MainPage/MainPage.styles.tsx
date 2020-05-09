import styled from 'styled-components'

export const Container = styled.div`
    margin: 50px 15%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 700px) {
        margin: 20px;
    }
`
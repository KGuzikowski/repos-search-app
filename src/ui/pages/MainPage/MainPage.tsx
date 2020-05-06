import React from 'react'
import Header from '../../components/Header/Header'
import { Container } from './MainPage.styles'
import SearchBar from '../../components/SearchBar/SearchBar';

type MainPageProps = {

}

const MainPage = (props: MainPageProps) => {
    return (
        <>
            <Header />
            
            <Container>
                <SearchBar />
            </Container>
        </>
    )
}

export default MainPage

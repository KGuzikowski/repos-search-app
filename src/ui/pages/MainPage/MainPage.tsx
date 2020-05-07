import React from 'react'
import Header from '../../components/Header/Header'
import { Container } from './MainPage.styles'
import SearchBar from '../../components/SearchBar/SearchBar';
import About from '../../components/About/About';

type MainPageProps = {

}

const MainPage = (props: MainPageProps) => {
    return (
        <>
            <Header />
            <Container>
                <About>
                    Below you can search for GitHub repositories by name.
                </About>
                <SearchBar />
            </Container>
        </>
    )
}

export default MainPage

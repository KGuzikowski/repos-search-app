import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import Header from '../../components/Header/Header'
import { Container } from './MainPage.styles'
import SearchBar from '../../components/SearchBar/SearchBar'
import About from '../../components/About/About'
import TableSection from '../../components/TableSection/TableSection'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Spinner from '../../components/Spinner/Spinner'
// import '../../components/Spinner/spinner.svg'
type MainPageProps = {

}

const MainPage = (props: MainPageProps) => {
    const repos = useSelector((state: RootState) => state.repos)
    console.log(repos)
    return (
        <>
            <Header />
            <Container>
                <About>
                    Below you can search for GitHub repositories by name.
                </About>
                <SearchBar />
                {repos.errorMessage
                    ? <ErrorMessage>{repos.errorMessage}</ErrorMessage>
                    : repos.isFetching
                        ? <Spinner />
                        : <TableSection user={null} repos={repos.repos}/>
                }
            </Container>
        </>
    )
}

export default MainPage

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
import GreetUser from '../../components/GreetUser/GreetUser'

const MainPage = () => {
    const repos = useSelector((state: RootState) => state.repos)
    const user = useSelector((state: RootState) => state.user)
    let start = 0, end = 0, data
    let length = repos.repos === null ? 0 : repos.repos.length
    if(repos.repos !== null && repos.repos.length !== 0) {
        const pagination = repos.pagination
        const page = repos.page
        start = (page - 1) * pagination
        end = start + pagination
        data = repos.repos.slice(start, end)
    } else data = repos.repos
    
    return (
        <>
            <Header />
            <Container>
                { user.errorMessage
                    ? <ErrorMessage>{user.errorMessage}</ErrorMessage>
                    : user.isFetching 
                        ? <Spinner />
                        : <>
                            { user.user !== null ? <GreetUser user={user.user.login} /> : null }
                            <About>
                                Below you can search for GitHub repositories by name.
                            </About>
                            <SearchBar />
                            { repos.errorMessage
                                ? <ErrorMessage>{repos.errorMessage}</ErrorMessage>
                                : repos.isFetching
                                    ? <Spinner />
                                    : <TableSection user={user.user} repos={data} reposNum={length} start={start} end={end}/>
                            }
                        </>
                }

            </Container>
        </>
    )
}

export default MainPage

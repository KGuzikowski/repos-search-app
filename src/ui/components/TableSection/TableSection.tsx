import React from 'react'
import { useDispatch } from 'react-redux'
import { repoType } from '../../../redux/repos/repo.types'
import { sortReposAsc, sortReposDesc } from '../../../redux/repos/repo.actions'
import { Text, Table, TableSectionContainer, Th, ThDiv, TableHeader, TableContainer, NoRepos } from './TableSection.styles'
import Row from './Row'
import { ArrowDown, ArrowUp, ArrowsDiv } from './Arrows'
import PaginationChanger from '../Pagination/PaginationChanger'
import PageChanger from '../Pagination/PageChanger'
import { userType } from '../../../redux/user/user.types'

type TableProps = {
    user: userType | null,
    repos: repoType[] | null,
    reposNum: number,
    start: number,
    end: number
}

const TableSection = ({ user, repos, reposNum, start, end }: TableProps) => {
    const dispatch = useDispatch()
    if(repos === null || repos.length === 0)
        return <NoRepos> There are no repositories selected, use search bar above to find some. </NoRepos>

    const handleArrowDownClick = (i: number) => {
        dispatch(sortReposAsc(i))
    }

    const handleArrowUpClick = (i: number) => {
        dispatch(sortReposDesc(i))
    }

    const theadContent = ['ID', 'Repo Title', 'Owner', 'Stars', 'Created at']

    return (
        <TableSectionContainer>
            <TableHeader>
                <Text>
                    Here are repositories you requested:
                </Text>
                <PaginationChanger />
            </TableHeader>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            {
                                theadContent.map((col, i) => (
                                    <Th key={i}>
                                        <ThDiv>
                                            <p>{col}</p>
                                            <ArrowsDiv>
                                                <ArrowUp onClick={() => handleArrowUpClick(i)}/>
                                                <ArrowDown onClick={() => handleArrowDownClick(i)}/>
                                            </ArrowsDiv>
                                        </ThDiv>
                                    </Th>   
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map(repo => <Row key={repo.id} repo={repo} highlighted={user !== null && user.id === repo.owner.id}/>)}
                    </tbody>
                </Table>
            </TableContainer>
            <PageChanger reposNum={reposNum} start={start} end={end} />
        </TableSectionContainer>
    )
}

export default TableSection 
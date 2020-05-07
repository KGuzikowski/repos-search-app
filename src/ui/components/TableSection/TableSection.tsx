import React from 'react'
import { repoType } from '../../../redux/repos/repo.types'
import { Text, Table, TableSectionContainer, Th, ThDiv } from './TableSection.styles'
import Row from './Row'
import ArrowDown from './ArrowDown'

type TableProps = {
    user: number | null,
    repos: repoType[] | null
}

const TableSection = ({ user, repos }: TableProps) => {
    if(repos === null || repos.length === 0)
        return <Text> There are no repositories selected, use search bar above to find some. </Text>

    const handleArrowClick = (e: any) => {

    }

    const theadContent = ['ID', 'Repo Title', 'Owner', 'Stars', 'Created at']

    return (
        <TableSectionContainer>
            <Text>
                Here are repositories you requested:
            </Text>
            <Table>
                <thead>
                    <tr>
                        {
                            theadContent.map((col, i) => (
                                <Th key={i}>
                                    <ThDiv>
                                        <p>{col}</p>
                                        <ArrowDown key={i} onClick={(e) => handleArrowClick(e)}/>
                                    </ThDiv>
                                </Th>   
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {repos.map(repo => <Row key={repo.id} repo={repo} />)}
                </tbody>
            </Table>
        </TableSectionContainer>
    )
}

export default TableSection 
import React from 'react'
import { repoType } from '../../../redux/repos/repo.types'
import { Td } from './TableSection.styles'

type RowProps = {
    repo: repoType
}

const Row = ({ repo }: RowProps) => (
    <tr>
        <Td>{repo.id}</Td>
        <Td>{repo.name}</Td>
        <Td>{repo.owner.name}</Td>
        <Td>{repo.stars}</Td>
        <Td>{repo.createdAt}</Td>
    </tr>
)

export default Row 
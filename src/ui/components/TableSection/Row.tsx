import React from 'react'
import { repoType } from '../../../redux/repos/repo.types'
import { Td } from './TableSection.styles'

type RowProps = {
    repo: repoType,
    highlighted: boolean
}

const Row = ({ repo, highlighted }: RowProps) => (
    <tr>
        <Td highlighted={highlighted}>{repo.id}</Td>
        <Td highlighted={highlighted}>{repo.name}</Td>
        <Td highlighted={highlighted}>{repo.owner.name}</Td>
        <Td highlighted={highlighted}>{repo.stars}</Td>
        <Td highlighted={highlighted}>{repo.createdAt}</Td>
    </tr>
)

export default Row 
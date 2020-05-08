import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { setPagination } from '../../../redux/repos/repo.actions'
import { PaginationChangerContainer, OptionSelect, PaginationChangerText } from './Pagination.styles'

const PaginationChanger = () => {
    const dispatch = useDispatch()
    const perPage = useSelector((state: RootState) => state.repos.pagination)

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const num = parseInt(e.currentTarget.value)
        if(num !== perPage)
            dispatch(setPagination(num))
    }

    const perPageOptions = [5, 10, 15, 20]
    return (
        <PaginationChangerContainer>
            <PaginationChangerText>
                Items per page:
            </PaginationChangerText>
            <OptionSelect value={perPage} onChange={e => handleChange(e)}>
                { perPageOptions.map(num => <option key={num} value={num}>{num}</option>) }
            </OptionSelect>
        </PaginationChangerContainer>
    )
}

export default PaginationChanger
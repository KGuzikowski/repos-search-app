import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { Input, Form, SearchIcon } from './SearchBar.styles'
import { secondaryColor } from '../../style-variables'
import { fetchReposStartAsync } from '../../../redux/repos/repo.actions'
import useDebounce from '../../../utils/useDebounce'

const SearchBar = () => {
    const name = useSelector((state: RootState) => state.repos.name)
    const [iconFill, setIconFill] = useState('#ccc')
    const [repoName, setRepoName] = useState(name)
    const dispatch = useDispatch()
    const debouncedRepoName = useDebounce(repoName, 500)
    
    useEffect(() => {
        if(debouncedRepoName) {
            dispatch(fetchReposStartAsync(debouncedRepoName))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedRepoName])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchReposStartAsync(repoName))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepoName(e.target.value)
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <SearchIcon fill={iconFill} />
            <Input type='text' placeholder='Repository name' value={repoName} onChange={e => handleChange(e)} onFocus={() => setIconFill(secondaryColor)} onBlur={() => setIconFill('#ccc')}/>
        </Form>
    )
}

export default SearchBar
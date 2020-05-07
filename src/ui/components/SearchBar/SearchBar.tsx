import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Form, SearchIcon } from './SearchBar.styles'
import { secondaryColor } from '../../style-variables'
import { fetchReposStartAsync } from '../../../redux/repos/repo.actions'

const SearchBar = () => {
    const [iconFill, setIconFill] = useState('#ccc')
    const [repoName, setRepoName] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('handling submit')
        dispatch(fetchReposStartAsync(repoName))
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepoName(e.target.value)
    }
    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <SearchIcon height='35px' width='35px' fill={iconFill} />
            <Input type='text' placeholder='Repository name' value={repoName} onChange={e => handleChange(e)} onFocus={() => setIconFill(secondaryColor)} onBlur={() => setIconFill('#ccc')}/>
        </Form>
    )
}

export default SearchBar
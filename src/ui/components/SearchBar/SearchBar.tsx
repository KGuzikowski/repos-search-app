import React from 'react'
import Button from '../Button/Button';
import { Input, Form } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <Form>
            <Input type='text' placeholder='Search phrase'/>
            <Button type='submit'>
                Search
            </Button>
        </Form>
    )
}

export default SearchBar
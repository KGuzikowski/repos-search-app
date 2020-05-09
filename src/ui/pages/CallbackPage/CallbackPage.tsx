import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUserStartAsync } from '../../../redux/user/user.actions'

const CallbackPage = ({ location }: RouteComponentProps) => {
    const dispatch = useDispatch()
    if(location.search.includes('?code=')) {
        const code = location.search.split('?code=')[1]
        dispatch(loginUserStartAsync(code))
    }
    return <Redirect to='/' />
}

export default CallbackPage
import { reposActionTypes, FetchResultType, fetchReposFailureType, fetchReposSuccessType, fetchReposStartType, reposStateType } from './repo.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>

export const fetchReposStart = (): fetchReposStartType => ({
    type: reposActionTypes.FETCH_REPOS_START,
    payload: true
})

export const fetchReposSuccess = (repos: FetchResultType): fetchReposSuccessType => ({
    type: reposActionTypes.FETCH_REPOS_SUCCESS,
    payload: repos
})

export const fetchReposFailure = (errorMessage: string): fetchReposFailureType => ({
    type: reposActionTypes.FETCH_REPOS_FAILURE,
    payload: errorMessage
})

export const fetchReposStartAsync = (name: string): ThunkAction<void, reposStateType, unknown, Action<string>> => {
    return async dispatch => {
        try {
            dispatch(fetchReposStart())
            console.log('Dispatching fetchReposStart')
            const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name&per_page=100`)
            const data = await response.json()
            dispatch(fetchReposSuccess(data))
            console.log('Dispatching fetchReposSuccess')
        } catch(error) {
            dispatch(fetchReposFailure('Sorry, cannot fetch data! Please try again.'))
            console.log('Dispatching fetchReposFailure')
        }
    }
}
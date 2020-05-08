import { reposActionTypes, FetchResultType, fetchReposFailureType, fetchReposSuccessType, fetchReposStartType, reposStateType, sortReposType, sortBy, setPaginationType, setPageType } from './repo.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>

const fetchReposStart = (): fetchReposStartType => ({
    type: reposActionTypes.FETCH_REPOS_START
})

const fetchReposSuccess = (repos: FetchResultType): fetchReposSuccessType => ({
    type: reposActionTypes.FETCH_REPOS_SUCCESS,
    payload: repos
})

const fetchReposFailure = (errorMessage: string): fetchReposFailureType => ({
    type: reposActionTypes.FETCH_REPOS_FAILURE,
    payload: errorMessage
})

export const fetchReposStartAsync = (name: string): ThunkAction<void, reposStateType, unknown, Action<string>> => {
    return async dispatch => {
        try {
            dispatch(fetchReposStart())
            const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name&per_page=100`)
            const data = await response.json()
            if(data.errors) throw Error
            const repos = data.items.map((item: any) => ({
                id: item.id,
                name: item.name,
                owner: {
                    id: item.owner.id,
                    name: item.owner.login
                },
                stars: item.stargazers_count,
                createdAt: item.created_at.substr(0, 10)
            }))
            dispatch(fetchReposSuccess(repos))
        } catch(error) {
            dispatch(fetchReposFailure('Sorry, cannot fetch data! Please try again.'))
        }
    }
}

export const sortReposDesc = (identifier: sortBy): sortReposType => ({
    type: reposActionTypes.SORT_REPOS_DESC,
    payload: identifier
})

export const sortReposAsc = (identifier: sortBy): sortReposType => ({
    type: reposActionTypes.SORT_REPOS_ASC,
    payload: identifier
})

export const setPagination = (num: number): setPaginationType => ({
    type: reposActionTypes.SET_PAGINATION,
    payload: num
})

export const setPage = (num: number): setPageType => ({
    type: reposActionTypes.SET_PAGE,
    payload: num
})
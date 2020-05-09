import { reposActionTypes, reposStateType, sortType } from './repo.types'
import { sortTable } from '../../utils/sortTable'

export const INITIAL_STATE: reposStateType = {
    repos: null,
    isFetching: false,
    errorMessage: '',
    name: '',
    pagination: 5,
    page: 1,
}

const reposReducer = (state = INITIAL_STATE, action: any): reposStateType => {
    switch (action.type) {
        case reposActionTypes.FETCH_REPOS_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: ''
            }
        case reposActionTypes.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                page: 1,
                repos: action.payload.repos,
                name: action.payload.name,
            }
        case reposActionTypes.FETCH_REPOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                page: 1,
            }

        case reposActionTypes.SORT_REPOS_ASC:
            return {
                ...state,
                repos: sortTable(state.repos!, sortType.Asc,  action.payload)
            }
        case reposActionTypes.SORT_REPOS_DESC:
            return {
                ...state,
                repos: sortTable(state.repos!, sortType.Desc,  action.payload)
            }
        case reposActionTypes.SET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            }
        case reposActionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }
}

export default reposReducer
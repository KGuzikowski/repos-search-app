import { reposActionTypes, reposStateType, sortType } from './repo.types'
import { sortTable } from '../../utils/sortTable'

export const INITIAL_STATE: reposStateType = {
    repos: null,
    isFetching: false,
    errorMessage: '',
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
                repos: action.payload
            }
        case reposActionTypes.FETCH_REPOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
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
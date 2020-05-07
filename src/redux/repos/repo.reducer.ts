import { reposActionTypes, reposStateType } from './repo.types'

export const INITIAL_STATE: reposStateType = {
    repos: null,
    isFetching: false,
    errorMessage: ''
}

const reposReducer = (state = INITIAL_STATE, action: any): reposStateType => {
    switch (action.type) {
        case reposActionTypes.FETCH_REPOS_START:
            return {
                ...state,
                isFetching: action.payload
            }
        case reposActionTypes.FETCH_REPOS_SUCCESS:
            console.log('aha', action.payload)
            if(action.payload.errors) throw Error
            const repos = action.payload.items.map((item: any) => ({
                id: item.id,
                name: item.name,
                owner: {
                    id: item.owner.id,
                    name: item.owner.login
                },
                stars: item.stargazers_count,
                createdAt: item.created_at
            }))
            console.log(repos)
            return {
                ...state,
                isFetching: false,
                repos
            }
        case reposActionTypes.FETCH_REPOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state
    }
}

export default reposReducer
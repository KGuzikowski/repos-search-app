export const reposActionTypes = {
    FETCH_REPOS_START: 'FETCH_REPOS_START',
    FETCH_REPOS_SUCCESS: 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_FAILURE: 'FETCH_REPOS_FAILURE',
}

export interface FetchResultType {
    total_count: number,
    incomplete_results: boolean,
    items: Array<Object>
}

export interface fetchReposStartType {
    type: typeof reposActionTypes.FETCH_REPOS_START,
    payload: boolean
}

export interface fetchReposSuccessType {
    type: typeof reposActionTypes.FETCH_REPOS_SUCCESS,
    payload: FetchResultType
}

export interface fetchReposFailureType {
    type: typeof reposActionTypes.FETCH_REPOS_FAILURE,
    payload: string
}

interface repoOwnerType {
    id: number,
    name: string
}

export interface repoType {
    id: number,
    name: string,
    owner: repoOwnerType,
    stars: number,
    createdAt: string
}

export interface reposStateType {
    repos: null | repoType[],
    isFetching: boolean,
    errorMessage: string
}

// export type reposActionTypesAll =  fetchReposSuccessType | fetchReposFailureType | fetchReposStartType
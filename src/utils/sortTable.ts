import { sortType, repoType, sortBy } from '../redux/repos/repo.types'

type elem = string | number

interface modifiedRepoType extends Omit<repoType,'createdAt'> {
    createdAt: number
}

const compareFunctionAsc = (a: elem, b: elem): number => {
    if(typeof a === 'string' && typeof b === 'string'){
        if(a < b) return -1
        if(a === b) return 0
        if(a > b) return 1
    } else if (typeof a === 'number' && typeof b === 'number')
        return (a - b)
    return 0
}

const compareFunctionDesc = (a: elem, b: elem): number => {
    if(typeof a === 'string' && typeof b === 'string'){
        if(a < b) return 1
        if(a === b) return 0
        if(a > b) return -1
    } else if (typeof a === 'number' && typeof b === 'number')
        return (b - a)
    return 0
}

export const sortTable = (data: repoType[], type: sortType, sortByElem: sortBy): repoType[] => {
    if(sortByElem === sortBy.CreatedAt) {
        const newData = data.map(elem => ({...elem, createdAt: Date.parse(elem.createdAt)}))
        if(type === sortType.Asc)
            newData.sort((a: modifiedRepoType, b: modifiedRepoType) => compareFunctionAsc(a.createdAt, b.createdAt))
        else
            newData.sort((a: modifiedRepoType, b: modifiedRepoType) => compareFunctionDesc(a.createdAt, b.createdAt))    
        
        return newData.map((elem: modifiedRepoType) => {
            const newDate = new Date(elem.createdAt)
            return {
                ...elem, 
                createdAt: `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
            }
        })
    }
    else {
        const newData = [...data]
        
        if(type === sortType.Asc) {
            switch(sortByElem) {
                case sortBy.Id:
                    newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.id, b.id))
                    break;
                case sortBy.RepoTitle:
                    newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.name, b.name))
                    break;
                case sortBy.Owner:
                    newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.owner.name, b.owner.name))
                    break;
                case sortBy.Stars:
                    newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.stars, b.stars)) 
            }
        } else {
            switch(sortByElem) {
                case sortBy.Id:
                    newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.id, b.id))
                    break;
                case sortBy.RepoTitle:
                    newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.name, b.name))
                    break;
                case sortBy.Owner:
                    newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.owner.name, b.owner.name))
                    break;
                case sortBy.Stars:
                    newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.stars, b.stars))
                    break;   
            }
        }

        return newData
    }
    
}
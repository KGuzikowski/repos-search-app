import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { setPage } from '../../../redux/repos/repo.actions'
import { PageChangerContainer, Option, OptionsDiv, Of, Dots } from './Pagination.styles'
import { ArrowRight, ArrowLeft } from '../TableSection/Arrows'

interface PageChangerType {
    reposNum: number,
    start: number,
    end: number
}

const PageChanger = ({ reposNum, start, end }: PageChangerType) => {
    const dispatch = useDispatch()
    const perPage = useSelector((state: RootState) => state.repos.pagination)
    const currentPage = useSelector((state: RootState) => state.repos.page)

    const handleOptionClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const nextPage = parseInt(e.currentTarget.innerHTML)
        if(currentPage !== nextPage)
            dispatch(setPage(nextPage))
    }

    const handleArrowClick = (num: number) => {
        dispatch(setPage(currentPage + num))
    }

    const pagesNumber = Math.ceil(reposNum / perPage)
    let nextPages: number[] = []
    
    if(currentPage === 1)
        for(let i = 2; i < currentPage + 4 && i < pagesNumber; i++) nextPages.push(i)
    else if(currentPage === pagesNumber - 2) {
        nextPages.push(currentPage-1)
        nextPages.push(currentPage)
        nextPages.push(currentPage+1)
    } else if(currentPage === pagesNumber - 1) {
        nextPages.push(currentPage-2)
        nextPages.push(currentPage-1)
        nextPages.push(currentPage)
    } else if(currentPage === pagesNumber) {
        nextPages.push(currentPage-3)
        nextPages.push(currentPage-2)
        nextPages.push(currentPage-1)
    }
    else for(let i = currentPage; i < currentPage + 3 && i < pagesNumber; i++) nextPages.push(i)

    return (
        <PageChangerContainer>
            <div>{start + 1}-{ end > reposNum ? reposNum : end } of {reposNum} repos</div>
            <OptionsDiv>
                <ArrowLeft onClick={() => handleArrowClick(-1)}/>
                <Option current={1 === currentPage} onClick={(e) => handleOptionClick(e)}>
                    1
                </Option>
                {currentPage > 2 ? <Dots>...</Dots> : null}
                {nextPages.map(num => <Option key={num} current={num === currentPage} onClick={(e) => handleOptionClick(e)}>{num}</Option>)}
                <Of>of</Of>
                <Option current={currentPage === pagesNumber} onClick={(e) => handleOptionClick(e)}>
                    {pagesNumber}
                </Option>
                <ArrowRight onClick={() => handleArrowClick(1)}/>
            </OptionsDiv>
        </PageChangerContainer>
    )
}

export default PageChanger
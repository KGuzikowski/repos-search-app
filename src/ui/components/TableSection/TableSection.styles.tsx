import styled from 'styled-components'
import { primaryColor, secondaryColor, secondaryDarkerColor } from '../../style-variables'

const css = `
    padding: 10px;
    font-size: 16px;
    text-align: left;
`

export const Text = styled.p`
    font-size: 20px;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
    }
`
export const TableSectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    aling-items: center;
`

export const Table = styled.table`
    margin-top: 10px;
    width: 100%;
    border-collapse: collapse;
`

export const TableContainer = styled.div`
    width: 100%;
    overflow: auto;
`

export const TableHeader = styled.div`
    width: 100%;
    margin: 40px 0 20px 0;
    display: flex;
    justify-content: space-between;
    aling-items: center;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        aling-items: flex-start;
        margin: 20px 0 10px 0;
    }
`

export const Th = styled.th`
    border: 3px solid ${primaryColor};
    background: ${secondaryColor};
    ${css}
`
export const Td = styled.td<{highlighted: boolean}>`
    border: 1px solid ${primaryColor};
    ${props => props.highlighted ? `color: ${secondaryDarkerColor};` : ''}
    ${css}
`

export const ThDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NoRepos = styled(Text)`
    @media only screen and (max-width: 700px) {
        margin-top: 30px;
        margin-bottom: 10px;
    }
`
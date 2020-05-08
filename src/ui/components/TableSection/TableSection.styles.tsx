import styled from 'styled-components'
import { primaryColor } from '../../style-variables'

const css = `
    padding: 10px;
    font-size: 16px;
    text-align: left;
`

export const Text = styled.p`
    font-size: 20px;
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

export const TableHeader = styled.div`
    width: 100%;
    margin: 40px 0 20px 0;
    display: flex;
    justify-content: space-between;
    aling-items: center;
`

export const Th = styled.th`
    border: 3px solid ${primaryColor};
    ${css}
`
export const Td = styled.td`
    border: 1px solid ${primaryColor};
    ${css}
`

export const ThDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
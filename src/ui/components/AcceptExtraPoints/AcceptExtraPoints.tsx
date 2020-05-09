import React from 'react'
import { useDispatch } from 'react-redux'
import { acceptExtraPoints } from '../../../redux/extraPoints/extraPoints.actions'
import { AcceptPoints, AcceptPointsMessage } from './AcceptExtraPoints.styles'
import Button from '../Button/Button'

const AcceptExtraPoints = () => {
    const dispatch = useDispatch()
    return (
        <AcceptPoints>
            <AcceptPointsMessage>
                It's not cookies. Accept to add extra points!
            </AcceptPointsMessage>
            <Button reversed onClick={() => dispatch(acceptExtraPoints())}>Accept</Button>
        </AcceptPoints>
    )
}

export default AcceptExtraPoints
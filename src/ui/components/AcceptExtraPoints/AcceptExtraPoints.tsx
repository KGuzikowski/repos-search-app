import React from 'react'
import { useDispatch } from 'react-redux'
import { acceptExtraPoints } from '../../../redux/extraPoints/extraPoints.actions'
import { AcceptPoints, AcceptPointsMessage } from './AcceptExtraPoints.styles'
import Button from '../Button/Button'

// this component used to have a different meaning but basically it could be further developed
// to become a cookies bar so I treat that like it now.

const AcceptExtraPoints = () => {
    const dispatch = useDispatch()
    return (
        <AcceptPoints>
            <AcceptPointsMessage>
                Accept cookies!
            </AcceptPointsMessage>
            <Button reversed onClick={() => dispatch(acceptExtraPoints())}>Accept</Button>
        </AcceptPoints>
    )
}

export default AcceptExtraPoints
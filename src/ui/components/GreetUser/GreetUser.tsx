import React from 'react'
import { GreetDiv, Greet, Info } from './GreetUser.styles'

interface GreetUserType {
    user: string
}

const GreetUser = ({ user }: GreetUserType) => {
    return (
        <GreetDiv>
            <Greet>
                Hi { user }!
            </Greet>
            <Info>
                (Your repositories will be highlighted)
            </Info>
        </GreetDiv>
    )
}

export default GreetUser
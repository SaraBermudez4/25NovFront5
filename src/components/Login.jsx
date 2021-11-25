import React, { useContext } from 'react'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { AuthContext } from './authContext'
import { login } from '../actions/authAction'
import { useNavigate } from 'react-router'

const Login = () => {

    const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(login('Sara Bermudez'))
        navigate('/home', {
            replace: true
        })
    }

    return (
        <div>
            <Text fontSize="2xl">Login</Text>
            <h1>{user.name}</h1>
            <hr />
            <Button variant="outline" colorScheme="blue" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default Login

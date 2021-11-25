import { Button } from '@chakra-ui/button'
import React, { useReducer } from 'react'
import { counterReducer, init, initialState } from '../reducers/counterReducer'
import { types } from '../types/types'

const Counter = () => {

    const [counter, dispatch] = useReducer(counterReducer, initialState, init)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <hr />
            <Button colorScheme="green" onClick={() => {
                dispatch({ type: types.increment })
            }}>
                Incremento
            </Button>
            <Button colorScheme="green" onClick={() => {
                dispatch({ type: types.decrement })
            }}>
                Decremento
            </Button>
            <Button colorScheme="green" onClick={() => {
                dispatch({ type: types.reset })
            }}>
                Reset
            </Button>
        </div>
    )
}

export default Counter

import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../components/authContext'
import Counter from '../components/Counter'
import Home from '../components/Home'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import { authReducer } from '../reducers/authReducer'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const AppRouter = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={
                        <PrivateRouter>
                            <RoutesApp />
                        </PrivateRouter>
                    } />
                    <Route path='login' element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default AppRouter

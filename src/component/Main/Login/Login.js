import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { LoginForm } from './LoginForm/LoginForm'

export function Login(){
    return(
        <>
            <Sidebar />
            <LoginForm />
        </>
    );
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { SignupForm } from './SignupForm/SignupForm'

export function Signup(){
    return(
        <>
            <Sidebar />
            <SignupForm/>
        </>
    );
}

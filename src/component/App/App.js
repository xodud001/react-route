import React from 'react'
import { Route } from 'react-router-dom'
import { Main } from '../Main/Main'
import { Login } from '../Main/Login/Login'
import { Signup } from '../Main/Signup/Signup'


export function App(){
    return(
        <>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
        </>
    );
}
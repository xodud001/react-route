import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


export function Sidebar(){
    return(
        <div className="side-bar">
            <Link to="/login" className="sidebar_btn">Login</Link>
            <Link to="/signup" className="sidebar_btn">Sign Up</Link>
        </div>
    );
}
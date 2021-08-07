import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


function Header() {
    return (
        <Router>
            <div className="headerContainer">
                <Link to='/' className='nav'>Home</Link>
                <Link to='/about' className='nav'>About</Link>
                <Link to='/contact' className='nav'>Contact</Link>
                <Link to='/login' className='nav'>Login</Link>
            </div>
        </Router >
    )
}

export default Header

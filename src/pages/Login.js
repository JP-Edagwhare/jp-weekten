import React from 'react'
import Button from '../Button'

function Login() {
    return (
        <div className='container mainLogin'>
            <input type='text' placeholder='Username' /><br />
            <input type='password' placeholder='Password' /><br />
            <div className='loginBtn'>
            <Button name='Login' />
            </div>
            <p className='inputDetails'>Please Login with your Username and Password</p>
        </div>
    )
}

export default Login;

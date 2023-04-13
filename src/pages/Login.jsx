import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = ({ token, setToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    

    const loginHandler = () => {
        setError('');
        setUsername('');
        setPassword('');

        axios({
            url: 'https://fakestoreapi.com/auth/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
        }).then(res => {
            setToken(res.data.token)
            localStorage.setItem('userToken', res.data.token)
            navigate('/')
            window.location.reload()
        }).catch(err => {
            setError(err.response.data)
        });
    }

  return (
    <div className="container-fluid">
        <div className='login'>
            <div className='login-title'>
                <h3>Welcome to Shop App! Please Login.</h3>
                <div className='login-other'>
                    <span>
                        New member?
                        <a href='#'> Register</a>
                    </span>
                </div>
            </div>
            <div className='login-inner'>
                <div className="login-input-name">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder='Please enter your username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <b></b>
                    <span></span>
                </div>
                <div className="login-input-password">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Please enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <b></b>
                    <span></span>
                </div>
                { error && <small style={{color: 'red', marginTop: '20px'}}>{error}</small>}
                <div className='login-btn'>
                    <button 
                        type='submit' 
                        className='submit-btn'
                        onClick={loginHandler}>SIGN IN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserLogin = ({token, setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [auth, setAuth] = useState(
        localStorage.getItem(localStorage.getItem('auth') || false)
    )
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
            localStorage.setItem('auth', true)
            navigate('/');
        }).catch(err => {
            setError(err.response.data)
        });
    }

  return (
    <div className='container-fluid'>
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
            <div>
                <form>
                    <div className='login-inner'>
                        <div className="login-input-name">
                            <label>Username</label>
                            <input 
                                disabled
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
                                disabled
                                type="password" 
                                placeholder='Please enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <b></b>
                            <span></span>
                        </div>
                        { error && <small>{error}</small>}
                        <div className='login-btn'>
                            <button 
                                type='submit' 
                                className='submit-btn disabled'
                                onClick={loginHandler}>LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

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
            console.log(res.data.token)
            navigate('/')
        }).catch(err => {
            setError(err.response.data)
        });
    }

  return (
    <div className='login'>
        <div className='login-inputs'>
            <input 
                type='text' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder='Username' />
            <input 
                type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' />
            { error && <small>{error}</small> }
            <button onClick={loginHandler} className='btn btn-outline-success'>Login</button>
        </div>
    </div>
  )
}

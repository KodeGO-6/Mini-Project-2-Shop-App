import React from 'react'

export const UserLogin = () => {
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
                            <input type="text" placeholder='Please enter your username' />
                            <b></b>
                            <span></span>
                        </div>
                        <div className="login-input-password">
                            <label>Password</label>
                            <input type="password" placeholder='Please enter your password' />
                            <b></b>
                            <span></span>
                        </div>
                        <div className='login-btn'>
                            <button type='submit' className='submit-btn'>LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

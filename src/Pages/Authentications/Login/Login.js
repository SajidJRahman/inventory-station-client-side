import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../../images/logo/Google.svg';
import GitHub from '../../../images/logo/GitHub.svg';
import './Login.css';

const Login = () => {
    return (
        <div id='login'>
            <div className='login'>
                <div>
                    <h1>Welcome back to<br /><span>InventoryStation</span></h1>
                    <p>Login to continue to your account...</p>
                </div>
                <div className='input-login-form text-center'>
                    <h2>Login</h2>
                    <p className='signup-link'>
                        Don't have an account?
                        <Link to='/sign-up'> Sign Up</Link>
                    </p>
                    <div className='social-login text-center'>
                        <p className='social-login-title'>Login with Social</p>
                        <button className='mx-auto btn'>
                            <img width='40px' src={Google} alt="" />
                            <h6>Continue with Google</h6>
                        </button>
                        <button className='mx-auto btn'>
                            <img width='40px' src={GitHub} alt="" />
                            <h6>Continue with GitHub</h6>
                        </button>
                    </div>
                    <div className='or-login-method'>
                        <div></div>
                        <p className='mx-2 mb-0'>or</p>
                        <div></div>
                    </div>
                    <form>
                        <p className='login-form-title'>Login with Email & Password</p>
                        <input type="email" name="email" id="" required placeholder='Email' />
                        <input type="password" name="password" id="" required placeholder='Password' />
                        <p className='forget-password'>Forget Password?</p>
                        <button className='button-login btn'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
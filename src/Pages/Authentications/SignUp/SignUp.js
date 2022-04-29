import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../../images/logo/Google.svg';
import GitHub from '../../../images/logo/GitHub.svg';
import './SignUp.css';

const SignUp = () => {
    return (
        <div id='sign-up'>
            <div className='sign-up'>
                <div>
                    <h1>Welcome to<br /><span>InventoryStation</span></h1>
                    <p>Sign Up to create your account...</p>
                </div>
                <div className='input-form text-center'>
                    <h2>Sign Up</h2>
                    <p className='login-link'>
                        Already have an account?
                        <Link to='/login'> Login</Link>
                    </p>
                    <div className='social-signup text-center'>
                        <p className='social-signup-title'>Sign Up with Social</p>
                        <button className='mx-auto btn'>
                            <img width='30px' src={Google} alt="" />
                            <h6>Continue with Google</h6>
                        </button>
                        <button className='mx-auto btn'>
                            <img width='30px' src={GitHub} alt="" />
                            <h6>Continue with GitHub</h6>
                        </button>
                    </div>
                    <div className='or-signup-method'>
                        <div></div>
                        <p className='mx-2 mb-0'>or</p>
                        <div></div>
                    </div>
                    <form>
                        <p className='signup-form-title'>Sign Up with Email & Password</p>
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="email" name="email" id="" required placeholder='Email' />
                        <input type="password" name="password" id="" required placeholder='Password' />
                        <button className='button-signup btn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
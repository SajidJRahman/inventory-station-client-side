import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../../images/logo/Google.svg';
import GitHub from '../../../images/logo/GitHub.svg';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='sign-up'>
            <div>
                <h1>Welcome to<br /><span>InventoryStation</span></h1>
                <p>Sign In to continue to your account...</p>
            </div>
            <div className='input-form text-center'>
                <h2>Sign Up</h2>
                <p className='login-link'>
                    Already have an account?
                    <Link to='login'> Login</Link>
                </p>
                <div className='social-signup text-center'>
                    <button className='mx-auto btn'>
                        <img width='40px' src={Google} alt="" />
                        <h6>Continue with Google</h6>
                    </button>
                    <button className='mx-auto btn'>
                        <img width='40px' src={GitHub} alt="" />
                        <h6>Continue with GitHub</h6>
                    </button>
                </div>
                <div className='or-method'>
                    <div></div>
                    <p className='mx-2 mb-0'>or</p>
                    <div></div>
                </div>
                <form>
                    <input type="text" name="name" id="" placeholder='Name' />
                    <br />
                    <input type="email" name="email" id="" required placeholder='Email' />
                    <br />
                    <input type="password" name="password" id="" required placeholder='Password' />
                    <br />
                    <button className='button-signup btn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
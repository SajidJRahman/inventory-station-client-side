import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../../../images/logo/Google.svg';
import GitHub from '../../../images/logo/GitHub.svg';
import './Login.css';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loader from '../../Shared/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        userGitHub,
        loadingGitHub,
        errorGitHub
    ] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        userEmailPassword,
        loadingEmailPassword,
        errorEmailPassword,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sendingReset,
        errorReset
    ] = useSendPasswordResetEmail(auth);

    if (loadingGoogle || loadingGitHub || loadingEmailPassword || sendingReset) {
        return <Loader />;
    }

    if (errorGoogle || errorGitHub || errorEmailPassword || errorReset) {
        alert(errorGoogle || errorGitHub || errorEmailPassword || errorReset.message);
    }

    if (userGoogle || userGitHub || userEmailPassword) {
        navigate(from, { replace: true });
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        if (email && password) {
            signInWithEmailAndPassword(email, password);
        }
    }

    const handlePasswordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Password reset link sent!', {
                position: "top-center",
                autoClose: 3000,
            });
        }
        else {
            alert('Please enter an email to reset your password!');
        }
    }

    return (
        <div id='login'>
            <ToastContainer />
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
                        <button onClick={() => signInWithGoogle()} className='mx-auto btn'>
                            <img width='30px' src={Google} alt="" />
                            <h6>Continue with Google</h6>
                        </button>
                        <button onClick={() => signInWithGithub()} className='mx-auto btn'>
                            <img width='30px' src={GitHub} alt="" />
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
                        <input onBlur={handleEmail} type="email" name="email" id="" required placeholder='Email' />
                        <input onBlur={handlePassword} type="password" name="password" id="" required placeholder='Password' />
                        <p onClick={handlePasswordReset} className='forget-password'>Forget Password?</p>
                        <button onClick={handleLogin} className='button-login btn'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
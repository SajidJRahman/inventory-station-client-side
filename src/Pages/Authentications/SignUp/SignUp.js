import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Google from '../../../images/logo/Google.svg';
import GitHub from '../../../images/logo/GitHub.svg';
import './SignUp.css';
import Loader from '../../Shared/Loader/Loader';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailSignUpError, setEmailSignUpError] = useState('');
    const [passwordSignUpError, setPasswordSignUpError] = useState('');

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
        createUserWithEmailAndPassword,
        userEmailPassword,
        loadingEmailPassword,
        errorEmailPassword,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        errorUpdate
    ] = useUpdateProfile(auth);

    const [
        sendEmailVerification,
        sendingVerification,
        errorVerification
    ] = useSendEmailVerification(auth);

    if (loadingGoogle || loadingGitHub || loadingEmailPassword || updating || sendingVerification) {
        return <Loader />;
    }

    if (errorGoogle || errorGitHub || errorEmailPassword || errorUpdate || errorVerification) {
        alert(errorGoogle || errorGitHub, errorEmailPassword || errorUpdate || errorVerification.message);
    }

    if (userGoogle || userGitHub || userEmailPassword) {
        updateProfile({ displayName: name });
        navigate(from, { replace: true });
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const validateEmail = email => {
        const testEmail = /\S+@\S+\.\S+/;
        return testEmail.test(email);
    }

    const handleSignIn = event => {
        event.preventDefault();

        if (!validateEmail(email) || email === '') {
            setEmailSignUpError('Please, enter a valid email address!');
            return;
        }

        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setPasswordSignUpError('Please, use at least one special character!');
            return;
        }

        if (email && password) {
            createUserWithEmailAndPassword(email, password);
            setEmailSignUpError('');
            setPasswordSignUpError('');
        }
    }

    return (
        <div id='sign-up'>
            <div className='sign-up'>
                <div className='welcome-sign-up'>
                    <h1 className='welcome-sign-up-header'>Welcome to<br /><span>InventoryStation</span></h1>
                    <p className='welcome-sign-up-text'>Sign Up to create your account...</p>
                </div>
                <div className='input-sign-up-form text-center'>
                    <h2>Sign Up</h2>
                    <p className='login-link'>
                        Already have an account?
                        <Link to='/login'> Login</Link>
                    </p>
                    <div className='social-signup text-center'>
                        <p className='social-signup-title'>Sign Up with Social</p>
                        <button onClick={() => signInWithGoogle()} className='mx-auto btn'>
                            <img width='30px' src={Google} alt="" />
                            <h6>Continue with Google</h6>
                        </button>
                        <button onClick={() => signInWithGithub()} className='mx-auto btn'>
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
                        <input onBlur={handleName} type="text" name="name" id="" placeholder='Name' />
                        <input onBlur={handleEmail} type="email" name="email" id="" required placeholder='Email' />
                        <p className='error-message'>{emailSignUpError}</p>
                        <input onBlur={handlePassword} type="password" name="password" id="" required placeholder='Password' />
                        <p className='error-message'>{passwordSignUpError}</p>
                        <button onClick={handleSignIn} className='button-signup btn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
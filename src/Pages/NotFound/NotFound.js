import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div id='not-found'>
            <div className='not-found text-center'>
                <h1>404</h1>
                <h2>Page not found...</h2>
                <p>Great job! You've gone where no man has ever gone before!</p>
                <Link to='/'>
                    <button className='btn rounded-pill'>Let's Get Back To Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
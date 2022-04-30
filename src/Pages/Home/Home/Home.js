import React from 'react';
import Banner from '../Banner/Banner';
import ProductsLogo from '../ProductsLogo/ProductsLogo';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <ProductsLogo />
            <div id='products'>

            </div>
        </div>
    );
};

export default Home;
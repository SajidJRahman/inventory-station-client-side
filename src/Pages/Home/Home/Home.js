import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import ProductsLogo from '../ProductsLogo/ProductsLogo';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <ProductsLogo />
            <ChooseUs />
            <div id='products'>

            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <Products />
            <ChooseUs />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Products from '../Products/Products';
import './Home.css';
import { Helmet } from 'react-helmet-async'
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='home'>
            <Helmet>
                <title>InventoryStation</title>
            </Helmet>
            <Banner />
            <Products />
            <ChooseUs />
            <ContactUs />
        </div>
    );
};

export default Home;
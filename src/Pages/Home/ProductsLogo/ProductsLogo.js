import React from 'react';
import './ProductsLogo.css';
import Apple from '../../../images/products-logo/Apple.png';
import Asus from '../../../images/products-logo/Asus.png';
import HP from '../../../images/products-logo/HP.png';
import Acer from '../../../images/products-logo/Acer.png';
import Samsung from '../../../images/products-logo/Samsung.png';

const ProductsLogo = () => {
    return (
        <div className='products-logo container'>
            <div className='apple'>
                <img src={Apple} alt="" />
            </div>
            <div className='asus'>
                <img src={Asus} alt="" />
            </div>
            <div className='acer'>
                <img src={Acer} alt="" />
            </div>
            <div className='samsung'>
                <img src={Samsung} alt="" />
            </div>
            <div className='hp'>
                <img src={HP} alt="" />
            </div>
        </div >
    );
};

export default ProductsLogo;
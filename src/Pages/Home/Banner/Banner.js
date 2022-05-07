import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import BannerOne from '../../../images/banner/banner-1.jpg';
import BannerTwo from '../../../images/banner/banner-2.jpg';
import BannerThree from '../../../images/banner/banner-3.jpg';
import BannerFour from '../../../images/banner/banner-4.jpg';
import BannerFive from '../../../images/banner/banner-5.jpg';
import BannerSix from '../../../images/banner/banner-6.jpg';

const Banner = () => {
    return (
        <Carousel className='banner' fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to InventoryStation</h3>
                    <p>We're InventoryStation, best warehouse in its class.</p>
                    <button className='btn btn-outline-light button-light rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerTwo}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>We're the provider of exotic laptops</h3>
                    <p className='text-dark'>Need unique laptops? We got your need!</p>
                    <button className='btn btn-dark button-dark rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerThree}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>We've got all the popular brands</h3>
                    <p>Asus, Acer, Apple, HP, Samsung we got them all!</p>
                    <button className='btn btn-outline-light button-light rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerFour}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>We keep on updating our inventory</h3>
                    <p className='text-dark'>We update our inventory every now & then with new products.</p>
                    <button className='btn btn-dark button-dark rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerFive}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                    <h3>We offer you to create an account!</h3>
                    <p>We offer you to create an account with email-passwpord, Google & GitHub.</p>
                    <button className='btn btn-outline-light button-light rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerSix}
                    alt="Sixth slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Need help? We're just a call away!</h3>
                    <p className='text-dark'>Or you may email us at any time!</p>
                    <button className='btn btn-dark button-dark rounded-pill px-4'>
                        <a href="#products">View Products</a>
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
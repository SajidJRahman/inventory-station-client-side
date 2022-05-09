import React from 'react';
import './About.css';
import AboutOne from '../../images/about/bg-1.jpg';
import AboutTwo from '../../images/about/bg-2.jpg';
import AboutThree from '../../images/about/bg-3.jpg';
import Title from '../Shared/Title/Title';

const About = () => {
    return (
        <div className='about-container'>
            <Title title='About' />
            <h2 className='pt-5 pb-2'>About</h2>
            <div className='about'>
                <div className='about-bg'>
                    <div>
                        <img src={AboutOne} alt="" />
                    </div>
                    <div>
                        <img src={AboutTwo} alt="" />
                    </div>
                    <div>
                        <img src={AboutThree} alt="" />
                    </div>
                </div>
                <h3 className='mt-5'>We Are The InventoryStation!</h3>
                <div className='about-text mx-auto'>
                    <p>The name of warehouse website. We've got some key important features for you as an admin to store & keep updating your products. For instance, you can set stock with a few steps. For your usability, we've added the update button everywhere! Need help? Or do you have suggestions for us? We got you! Just call us by our number, or you can email us at any time, we will get back to you as early as we can. You may even visit our warehouse. Thanks for staying with us!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className='choose-us-container text-center'>
            <h2>Why Choose Us?</h2>
            <div className='choose-us container'>
                <div className='choose-us-section'>
                    <div className='choose-us-icon-one'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <div className='choose-us-detail'>
                        <p>We got the best collection on the market today! Best in product class, price & quality has always been our main target. You can choose as many items as you want from our decent amount of collection.</p>
                    </div>
                </div>
                <div className='choose-us-section'>
                    <div className='choose-us-icon-two'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='choose-us-detail'>
                        <p>We offer you to create your account, where you can store all your favorite products & delete any item you want. We currently offer Google, GitHub & Email-Password method, offering your security.</p>
                    </div>
                </div>
                <div className='choose-us-section'>
                    <div className='choose-us-icon-three'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                    </div>
                    <div className='choose-us-detail'>
                        <p>Need help? Or do you have suggestions for us? We got you! Just call us by our number, or you can email us at any time, we will get back to you as early as we can. You may even visit our warehouse.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
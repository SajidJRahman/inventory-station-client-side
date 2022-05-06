import React from 'react';
import './Blogs.css';
import JavaScript from '../../images/blogs/JavaScript.svg';
import NodeJS from '../../images/blogs/Node.js.svg';
import MongoDB from '../../images/blogs/MongoDB.svg';

const Blogs = () => {
    return (
        <div className='blogs-container text-center'>
            <h2>Blogs</h2>
            <div className='blogs px-auto'>
                <div className='blog'>
                    <div className='blogs-icons'>
                        <img className='javascript' src={JavaScript} alt="" />
                        <h5>VS</h5>
                        <img className='nodejs' src={NodeJS} alt="" />
                    </div>
                    <div className='blogs-details'>
                        <h4>Difference between JavaScript & Node.js</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                        <p>JavaScript is high-level, dynamic typing & prototype-based object oriented programming language. It is a cross-platform & interpreted scripting language that is used for client-side scripting. On the other hand, Node.js is an open source, cross-platform & back-end runtime environment for JavaScript. Node.js runs on the Chrome V8 engine to execute JavaScript code outside a web browser. JavaScript is used for both frontend & backend development, while Node.js uses JavaScript code to develop server-side applications. JavaScript is the most popular programming language, while Node.js is a library for JavaScript.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blogs-icons'>
                        <img className='nodejs' src={NodeJS} alt="" />
                        <h4>&</h4>
                        <img className='mongodb' src={MongoDB} alt="" />
                    </div>
                    <div className='blogs-details'>
                        <h4>When should I use use Node.js & MongoDB?</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                        <p>I should use Node.js for non-blocking, event-driven servers due to its single-threaded nature. I should use Node.js when I need to run my own server. I should use Node.js whenever I need to run JavaScript code outside a web browser. I should use Node.js when I need to develop both front-end and back-end. So when should I use MongoDB? I should use MongoDB when I need high availability data with automatic, fast & instant data recovery. I should use MongoDB when most of my services are cloud-based. I should use MongoDB when I don't have a database administrator.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blogs-icons'>
                        <h1>SQL</h1>
                        <h5>VS</h5>
                        <h1>NoSQL</h1>
                    </div>
                    <div className='blogs-details'>
                        <h4>Difference between SQL & NoSQL</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                        <p>An SQL (Structured Query Language) database & a NoSQL (non Structured Query Language) database are very different. The SQL were developed with a focus on reducing data duplication, while the NoSQL were developed with a focus on scaling & allowing for rapid application changes. An SQL were developed for general purposes, while a NoSQL were developed for data with simple lookup queries, predictable query patterns & analyzing and traversing relationships between connected data. An SQL database is relational, while a NoSQL database is non-relational. An SQL database is better for multi-row transactions, while a NoSQL database is better for unstructured data like JSON</p>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blogs-icons'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="400"
                            height="201"
                            viewBox="0 0 400 201"
                        >
                            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                <g>
                                    <path fill="#000" d="M0 0.5H400V200.5H0z"></path>
                                    <g>
                                        <path
                                            fill="#FFF"
                                            d="M57.8 27.2L57.7.3h-15l.1 26.9 7.5 10.3 7.5-10.3zM42.8 73.3v27h15v-27L50.3 63l-7.5 10.3z"
                                            transform="translate(50 50)"
                                        ></path>
                                        <path
                                            fill="#00F2E6"
                                            d="M57.8 73.3l15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9v12.7zM42.8 27.2L26.9 5.4l-12.1 8.8L30.6 36l12.2 3.9V27.2z"
                                            transform="translate(50 50)"
                                        ></path>
                                        <path
                                            fill="#00B9F1"
                                            d="M30.6 36L5 27.7.4 41.9 26 50.3l12.1-4L30.6 36zM62.4 54.2l7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3-12.1 3.9z"
                                            transform="translate(50 50)"
                                        ></path>
                                        <path
                                            fill="#D63AFF"
                                            d="M74.5 50.3l25.6-8.4-4.6-14.2L69.9 36l-7.5 10.3 12.1 4zM26 50.3L.4 58.6 5 72.8l25.6-8.3 7.5-10.3L26 50.3z"
                                            transform="translate(50 50)"
                                        ></path>
                                        <path
                                            fill="#FB015B"
                                            d="M30.6 64.5L14.8 86.3l12.1 8.8 15.9-21.8V60.6l-12.2 3.9zM69.9 36l15.8-21.8-12.1-8.8-15.8 21.8v12.7L69.9 36z"
                                            transform="translate(50 50)"
                                        ></path>
                                        <path
                                            fill="#FFF"
                                            d="M156.1 25.8v35c0 7.7-6.3 14-14 14v-7c3.9 0 7-3.1 7-7v-35h7zm127.8 7h15.8v-7h-38.5v7h15.7v42h7v-42zm-43.8-7v35c0 3.9-3.1 7-7 7s-7-3.1-7-7v-21c0-7.7-6.3-14-14-14s-14 6.3-14 14v21c0 3.9-3.1 7-7 7s-7-3.1-7-7v-35h-7v35c0 7.7 6.3 14 14 14s14-6.3 14-14v-21c0-3.9 3.1-7 7-7s7 3.1 7 7v21c0 7.7 6.3 14 14 14s14-6.3 14-14v-35h-7z"
                                            transform="translate(50 50)"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='blogs-details'>
                        <h4>What's the purpose of JWT? How does it work?</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                        <p>JSON Web Token or JWT is an open standard, that is used for securely transmitting information between parties as a JSON object. The transmitted information via JWT can be verified & trusted because it is digitally signed. To make JSON Web Token work it will contain three important parts, they are a header, a payload & a signature. Whenever a user try to access a private route, the user agent will send the JWT in the Authorization header using the Bearer, then the server's protected route will check JWT in the Authorization header valid. If the JWT is valid, the user will be allowed to access the protected route. This is how JWT works.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
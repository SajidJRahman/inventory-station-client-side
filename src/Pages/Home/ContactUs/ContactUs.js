import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './ContactUs.css';

const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        toast.success("Thanks for contacting us! We'll get back to you shortly.", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset();
    }

    return (
        <div className='contact-us-container text-center'>
            <h2>Contact Us</h2>
            <form className='contact-form mx-auto'>
                <div className='contact-details'>
                    <input type="text" name="name" {...register('name', { required: true })} id="" placeholder='Enter Name' />
                    <input type="email" name="email" {...register('email', { required: true })} id="" placeholder='Enter Email' />
                    <input type="tel" name="telephone" {...register('number', { required: true })} id="" placeholder='Enter Number' />
                    <textarea name="message" {...register('message', { required: true })} id="" rows="5" placeholder='Enter Your Message'></textarea>
                    <button onClick={handleSubmit(onSubmit)} className='submit-button btn rounded-pill
            '>Submit</button>
                </div>
            </form >
        </div>
    );
};

export default ContactUs;
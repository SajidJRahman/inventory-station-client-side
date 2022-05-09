import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Title from '../../Shared/Title/Title';

const AddItems = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, reset, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('https://inventory-station.herokuapp.com/my-items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Item added successfully!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset();
            })
    }

    return (
        <div className='add-items-container text-center'>
            <Title title='Add Items' />
            <ToastContainer />
            <h2 className='py-4'>Add New Items</h2>
            <form className='add-items mx-auto'>
                <textarea name="image" {...register('image', { required: true })} id="" cols="47" placeholder='Paste An Image Link Here'>https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/63/146307.jpg</textarea>
                <div className='add-items-details'>
                    <input type="text" name="name" {...register('name', { required: true })} id="" placeholder='Product Name' />
                    <input type="number" name="quantity" {...register('quantity', { required: true })} id="" placeholder='Quantity' />
                    <textarea className='description-textarea' name="description" {...register('description', { required: true })} id="" cols="46" rows="2" placeholder='Description'>Apple M1-CPU 8-core, SSD processor: 256GB, RAM: 8GB, Display: 13.3'</textarea>
                    <input type="text" name="supplier" {...register('supplier', { required: true })} id="" placeholder='Supplier' />
                    <input type="number" name="price" {...register('price', { required: true })} id="" placeholder='Price' />
                    <input type="email" name="email" value={user.email} disabled {...register('email', { required: true })} id="" placeholder='Your Email' />
                    <button onClick={handleSubmit(onSubmit)} className='add-items-button btn rounded-pill
            '>Add This Item</button>
                </div>
            </form >
        </div >
    );
};

export default AddItems;
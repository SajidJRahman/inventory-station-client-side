import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert('item has been added!')
            })
    }

    return (
        <div className='add-items-container text-center'>
            <h2 className='py-4'>Add New Items</h2>
            <form className='add-items mx-auto'>
                <textarea name="image" {...register('image', { required: true })} id="" cols="47" placeholder='Paste An Image Link Here'>https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/14/63/146307.jpg</textarea>
                <div className='add-items-details'>
                    <input type="text" name="name" {...register('name', { required: true })} id="" placeholder='Product Name' />
                    <input type="number" name="quantity" {...register('quantity')} id="" placeholder='Quantity' />
                    <textarea className='description-textarea' name="description" {...register('description', { required: true })} id="" cols="46" rows="2" placeholder='Description'>Apple M1-CPU 8-core, SSD processor: 256GB, RAM: 8GB, Display: 13.3'</textarea>
                    <input type="text" name="supplier" {...register('supplier', { required: true })} id="" placeholder='Supplier' />
                    <input type="number" name="price" {...register('price', { required: true })} id="" placeholder='Price' />
                    <input type="email" name="email" {...register('email', { required: true })} id="" placeholder='Your Email' />
                    <button onClick={handleSubmit(onSubmit)} className='add-items-button btn rounded-pill
            '>Add This Item</button>
                </div>
            </form >
        </div >
    );
};

export default AddItems;
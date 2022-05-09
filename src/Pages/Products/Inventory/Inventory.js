import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';
import { useForm } from "react-hook-form";
import useUpdateProducts from '../../../hooks/useUpdateProducts';
import { toast } from 'react-toastify';
import Title from '../../Shared/Title/Title';

const Inventory = () => {
    const { id } = useParams();
    const [productsInfo] = useUpdateProducts({});
    const { register, handleSubmit, reset } = useForm();

    const {
        _id,
        image,
        name,
        description,
        price,
        supplier,
        quantity
    } = productsInfo

    const onSubmit = data => {
        fetch(`https://inventory-station.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                toast.success('Updated product quantity!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset({
                    quantity: ''
                });
            });
    }

    const handleDelivered = () => {
        const quantityDelivered = {
            quantity: quantity - 1
        };
        reset()
        if (quantity > 0) {
            fetch(`https://inventory-station.herokuapp.com/products/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(quantityDelivered)
            })
                .then(response => response.json())
                .then(result => {
                    toast.success('Updated product quantity!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    }

    return (
        <div className='inventory-conatainer'>
            <Title title='Inventory' />
            <h2 className='py-5 m-0 text-center'>Update quantity for {name}</h2>
            <div className='inventory container'>
                <img className='img-fluid' title={name} src={image} alt="" />
                <div className='inventory-details'>
                    <h2>{name}</h2>
                    <p>Product ID: <b>{_id}</b></p>
                    <p>{description}</p>
                    <div className='mb-2'>
                        Available in stock:
                        {
                            quantity === 0 ? <b> Stock Out</b> : <><b> {quantity}</b> laptops</>
                        }
                    </div>
                    <h4>Price: <b>€{price}</b>/laptop</h4>
                    <p>Supplier: <b>{supplier}</b></p>
                    <input {...register('quantity', { required: true })} type="number" name="quantity" min="1" id="" placeholder='Quantity' />
                    <button onClick={handleSubmit(onSubmit)} className='btn button-restock btn-dark rounded-pill py-2'>
                        Restock Item
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button onClick={handleDelivered} className='button-delivered btn rounded-pill py-2'>Delivered</button>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/manage-inventory'>
                    <button className='manage-inventory-button btn rounded-pill'>
                        Manage Inventory
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;
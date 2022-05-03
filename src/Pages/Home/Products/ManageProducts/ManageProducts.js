import React from 'react';
import './ManageProducts.css';

const Product = props => {
    const {
        _id,
        image,
        name,
        description,
        price,
        quantity,
        supplier
    } = props.product;

    return (
        <div className='product container'>
            <img className='img-fluid' title={name} src={image} alt="" />
            <div className='product-details'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Available in stock: <b>{quantity}</b> laptops</p>
                <h4>Price: <b>€{price}</b>/laptop</h4>
                <p>Supplier: {supplier}</p>
                <button className='btn btn-dark rounded-pill ps-4 py-2'>
                    Update Stock
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Product;
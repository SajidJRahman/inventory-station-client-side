import React from 'react';
import './ManageInventory.css';
import useProducts from '../../../hooks/useProducts';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Title from '../../Shared/Title/Title';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const navigate = useNavigate();
    const navigateToInventory = _id => {
        navigate(`/inventory/${_id}`);
    }

    const deleteProduct = _id => {
        const confirmDelete = window.confirm('This cannot be undone, are you sure you want to delete?');

        if (confirmDelete === true) {
            const url = `https://inventory-station.herokuapp.com/products/${_id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(response => response.json())
                .then(data => {
                    const productsLeft = products.filter(product => product._id !== _id);
                    setProducts(productsLeft);
                    toast.success('Item has been deleted successfully!', {
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
        <div className='manage-inventory-container text-center container'>
            <Title title='Manage Inventory' />
            <h2 className='py-3'>Manage Inventory</h2>
            <div className='manage-inventory'>
                {
                    products.map(product =>
                        <div className='manage-inventory-items' key={product._id}>
                            <img title={product.name} src={product.image} alt="" />
                            <div className='manage-inventory-details'>
                                <h2>{product.name}</h2>
                                <div>
                                    Available in stock:
                                    {
                                        product.quantity === 0 ? <b> Stock Out</b> : <><b> {product.quantity}</b> laptops</>
                                    }
                                </div>
                                <p><small>{product.description}</small></p>
                                <p>Supplier: <b>{product.supplier}</b></p>
                                <h5>Price: <b>€{product.price}</b>/laptop</h5>
                                <button onClick={() => navigateToInventory(product._id)} className='update-button btn btn-dark rounded-pill'>Update This Product</button>
                                <button onClick={() => deleteProduct(product._id)} className='delete-button btn btn-dark rounded-pill
                                '>Delete This Item</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/add-items'>
                <button className='button-add-item btn rounded-pill ps-3'>
                    Add new Item
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </button>
            </Link>
        </div >
    );
};

export default ManageInventory;
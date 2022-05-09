import React from 'react';
import './MyItems.css';
import useMyItems from '../../../hooks/useMyItems';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Title from '../../Shared/Title/Title';

const MyItems = () => {
    const [myItems, setMyItems] = useMyItems();

    const navigate = useNavigate();
    const navigateToInventory = _id => {
        navigate(`/inventory/${_id}`);
    }

    const deleteMyItem = _id => {
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
                    const productsLeft = myItems.filter(myItem => myItem._id !== _id);
                    setMyItems(productsLeft);
                    toast.success('The item has been deleted successfully!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    }

    return (
        <div className='my-items-container text-center container'>
            <Title title='My Items' />
            <ToastContainer />
            <h2 className='py-3'>My Items</h2>
            <div className='my-items'>
                {
                    myItems.map(myItem =>
                        <div className='my-item' key={myItem._id}>
                            <img title={myItem.name} src={myItem.image} alt="" />
                            <div className='my-items-details'>
                                <h2>{myItem.name}</h2>
                                <div>
                                    Available in stock:
                                    {
                                        myItem.quantity === 0 ? <b> Stock Out</b> : <><b> {myItem.quantity}</b> laptops</>
                                    }
                                </div>
                                <p><small>{myItem.description}</small></p>
                                <p>Supplier: <b>{myItem.supplier}</b></p>
                                <h5>Price: <b>€{myItem.price}</b>/laptop</h5>
                                <button onClick={() => navigateToInventory(myItem._id)} className='update-button btn btn-dark rounded-pill'>Update This myItem</button>
                                <button onClick={() => deleteMyItem(myItem._id)} className='delete-button btn btn-dark rounded-pill
                                '>Delete This Item</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyItems;
import React from 'react';
import './AddItems.css';

const AddItems = () => {
    return (
        <div className='add-items-container text-center'>
            <h2 className='py-4'>Add New Items</h2>
            <form className='add-items mx-auto'>
                <textarea name="" id="" cols="39" placeholder='Paste An Image Link Here'>Paste An Image Link</textarea>
                <div className='add-items-details'>
                    <input type="text" name="name" id="" placeholder='Product Name' />
                    <input type="text" name="quantity" id="" placeholder='Quantity' />
                    <textarea className='description-textarea' name="description" id="" cols="38" rows="1" placeholder='Description'></textarea>
                    <input type="text" name="supplier" id="" placeholder='Supplier' />
                    <input type="number" name="" id="" placeholder='Price' />
                    <input type="email" name="email" id="" placeholder='Your Email' />
                    <button className='add-items-button btn rounded-pill
            '>Add This Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;
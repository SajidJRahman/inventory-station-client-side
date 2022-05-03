import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import ManageProduct from '../ManageProducts/ManageProducts';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();
    const homeProducts = products.slice(0, 6);

    return (
        <div id='products' className='products'>
            <h2 className='text-center my-5'>Explore Products</h2>
            <div>
                {
                    homeProducts.map(product =>
                        <ManageProduct
                            key={product._id}
                            product={product}
                        />)
                }
            </div>
            <div className='text-center'>
                <Link to='/manage-inventory'>
                    <button className='manage-button btn rounded-pill ps-4'>
                        Manage All Products
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Products;
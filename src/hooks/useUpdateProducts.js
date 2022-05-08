import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useUpdateProducts = () => {
    const [productsInfo, setProductsInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(data => setProductsInfo(data));
    }, []);

    // test again, because I am having issues pushing to GitHub

    return [productsInfo, setProductsInfo];
};

export default useUpdateProducts;
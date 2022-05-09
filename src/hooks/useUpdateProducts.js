import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useUpdateProducts = () => {
    const [productsInfo, setProductsInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://inventory-station.herokuapp.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProductsInfo(data));
    }, [productsInfo]);

    return [productsInfo, setProductsInfo];
};

export default useUpdateProducts;
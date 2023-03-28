import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
                
            <div className='shopping-products'>
                {
                    products.map(product => <Product
                    product={product}
                    key={product.id}
                    ></Product> )
                }
            </div>
            <div className='cart-summary'>
                <h4>Shopping-Cart summary</h4>
            </div>
            
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart= (product) =>{
       const newCart = [...cart , product];
       setCart(newCart);
    }

    return (
        
        <div>
            
            <div className='shop-container'>
                
                <div className='shopping-products'>
                    {
                        products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product> )
                    }
                </div>
                <div className='cart-summary'>
                    <Cart cart={cart}></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;
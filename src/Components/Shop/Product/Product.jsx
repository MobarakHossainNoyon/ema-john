import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name:{name} </h3>
        </div>
    );
};

export default Product;
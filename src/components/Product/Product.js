import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, key, price, stock} = props.product
    return (

        <div className='product' id= {key}>
            <div className='product-img'>
                <img src= {img} alt=''></img>
            </div>            
            <div className='product-desc'>
                <h3 className='product-name'>{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} limit in stock - Order soon</p>
                <button className= 'main-btn' onClick = {() => props.eventHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
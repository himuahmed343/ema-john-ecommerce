import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, key, price, stock} = props.product
    return (

        <div className='product'>
            <div className='product-img'>
                <img src= {img} alt=''></img>
            </div>            
            <div className='product-desc'>
                <h3 className='product-name'><Link to={"/product/"+ key}>{name}</Link></h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} limit in stock - Order soon</p>
                { props.showAddToCart && <button className= 'main-btn' onClick = {() => props.eventHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;
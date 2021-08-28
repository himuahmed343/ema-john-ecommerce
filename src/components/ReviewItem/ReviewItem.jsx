import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    // console.log(props.product)
    return (
        <div className="reviewItem">
            <h1 className="product-name">{name}</h1>
            <p>Quantity: {quantity}</p>
            <br></br>
            <button className='main-btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;<h1>Review items</h1>
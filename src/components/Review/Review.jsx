import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';

const Review = () => {
    
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        });
        setCart(cartProducts);
        // console.log(cartProducts);
    }, [])
    return (
        <div>
            <h1> Review Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>
                    )
            }
        </div>
    );
};

export default Review;
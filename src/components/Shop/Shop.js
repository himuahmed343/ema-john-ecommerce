import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handlerAdd = (product) => {
        // console.log("Product Added", product)
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length; 
        // console.log(count);
        addToDatabaseCart(product.key, count)

    }
    return (
        <div className= "shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product showAddToCart = {true} key={pd.key} eventHandle = {handlerAdd} product={pd}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
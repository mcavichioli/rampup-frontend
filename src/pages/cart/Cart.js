import React from 'react';
import './Cart.css';
import { Provider } from 'react-redux'
import cartProducts from '../products/Products.js'

export default function Cart() {
    return(
        <Provider store={cartProducts}>
            console.log();
            
            <div>Cart</div>
        </Provider>
    );
}
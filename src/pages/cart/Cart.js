import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';

export default function Cart() {
    const products = useSelector(state => state.data);
    console.log(products);
    return(
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.name}
                    {product.stock < 1 && <span> (Unavailable) </span>}</strong>
                    <p>{product.description}</p>
                    <strong>R$ {product.price}</strong>
                </article>
            ))}
        </div>

    );
}

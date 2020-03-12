import React, { useState, useEffect } from 'react';
import api from '../../core/services/api.js';
import './Products.css';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await fetch(`${api}/products`);
        const data = await response.json();
        setProducts(data);
    }, []);

    function addToCart(id) {
        const cart = products.map(product => {
            return product._id === id ? { ...product, addToCart: !product.addToCart} : product;
        });

        setProducts(cart);
    }

    return(
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.name}
                    {product.stock < 1 && <span> (Unavailable) </span>}</strong>
                    <p>{product.description}</p>
                    <div className="actions">
                        {product.addToCart && <span>(Added)</span>}
                        <button disabled={product.stock < 1} onClick={() => addToCart(product._id)}>Add to Cart</button>
                    </div>
                </article>
            ))}
        </div>
    );

}
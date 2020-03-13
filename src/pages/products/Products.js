import React, { useState, useEffect } from 'react';
import api from '../../core/services/api.js';
import './Products.css';
import { useDispatch } from 'react-redux';

export default function Products() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        const response = await fetch(`${api}/products`);
        const data = await response.json();
        setProducts(data);
    }, []);

    useEffect(() => {
        const cartProducts = products.filter(product => product.addedToCart);
        dispatch({type: 'ADD_PRODUCTS', cartProducts});
    },[products]);

    function addToCart(id) {
        const cart = products.map(product => {
            return product._id === id ? { ...product, addedToCart: !product.addedToCart} : product;
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
                    <strong>R$ {product.price}</strong>
                    <div className="actions">
                        <button disabled={product.stock < 1} onClick={() => addToCart(product._id)}>
                            <i className="fa fa-fw fa-shopping-cart"></i> Add to Cart
                        </button>
                        {product.addedToCart && <span>Added to cart!</span>}
                    </div>
                </article>
            ))}
        </div>
    );

}
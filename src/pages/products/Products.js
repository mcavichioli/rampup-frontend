import React, { useState, useEffect } from 'react';
import api from '../../core/services/api.js';
import './Products.css';
import { useDispatch } from 'react-redux';

export default function Products() {

    const [products, setProducts] = useState([]);
    let [page, setPage] = useState(1);

    const dispatch = useDispatch();

    async function fetchData() {
        const response = await fetch(`${api}/products?limit=10&page=${page}`);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function prevPage() {
        if (page === 1) return;
        setPage(page-=10);
        fetchData();
    } 

    function nextPage() {
        setPage(page+=10);
        fetchData();
    }

    function addToCart(id) {
        const cart = products.map(product => {
            if (product._id === id){
                product.stock--;
                dispatch({type: 'ADD_PRODUCTS', product});
                return { ...product, addedToCart: !product.addedToCart};
            }
            else
                return product
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
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );

}
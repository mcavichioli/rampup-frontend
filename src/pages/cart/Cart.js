import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';

export default function Cart() {
    const products = useSelector(state => state.data);

    const finishOrder = () => {
        console.log(products);
    }

    return(
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.name}</strong>
                    <p>{product.description}</p>
                    <strong>R$ {product.price}</strong>
                </article>
            ))}
            <div className="actions">
                <button onClick={finishOrder}>Finish order</button>
            </div>
        </div>

    );
}

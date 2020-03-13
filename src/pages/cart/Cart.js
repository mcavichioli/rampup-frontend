import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';

export default function Cart() {
    const products = useSelector(state => state.data);

    function finishOrder() {
        console.log(products);
    }

    function removeProductfromCart(product) {
        console.log(product);
    }

    return(
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.name}</strong>
                    <button className="btn" onClick={() => removeProductfromCart(product)}><i className="fas fa fa-fw fa-times"></i></button>
                    <p>{product.description}</p>
                    <strong>R$ {product.price}</strong>
                </article>
            ))}
            <div className="actions">
                <button onClick={() => finishOrder()}>Finish order</button>
            </div>
        </div>

    );
}

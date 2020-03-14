import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const products = useSelector(state => state.data);
    const dispatch = useDispatch();

    function finishOrder() {
        console.log(products);
    }

    function removeProductfromCart(product) {
        // console.log(products.filter(product => product === productToRemove));
        // products.pop(products.filter(product => product === productToRemove));
        dispatch({type: 'REMOVE_PRODUCTS', product});
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

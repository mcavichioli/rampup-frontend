import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// Stateless component: criar componentes em react com apenas funções, ao invés de class
export default function Header() {
    const products = useSelector(state => state.data);
    return (
        <div className="navbar">
            <Link to="/" className="active" ><i className="fa fa-fw fa-home"></i> Products </Link>
            <Link to="/cart"><i className="fa fa-fw fa-shopping-cart"></i> 
                Cart <small>({products.length !== 0 ? products.length : '0'})</small>
            </Link>
            <Link to="/orders"><i className="fa fa-fw fa-shopping-bag"></i> Orders</Link>
        </div>
    );
}

import React from 'react';
import './Header.css';

// Stateless component: criar componentes em react com apenas funções, ao invés de class
const Header = () => (
    <div className="navbar">
        <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Products </a>
        <a href="/cart"><i className="fa fa-fw fa-shopping-cart"></i> Cart</a>
        <a href="/purchases"><i className="fa fa-fw fa-shopping-bag"></i> Orders</a>
    </div>
);

export default Header;
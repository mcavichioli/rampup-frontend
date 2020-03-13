import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


// Stateless component: criar componentes em react com apenas funções, ao invés de class
const Header = () => (
    <div className="navbar">
        <Link to="/" className="active" ><i className="fa fa-fw fa-home"></i> Products </Link>
        <Link to="/cart"><i className="fa fa-fw fa-shopping-cart"></i> Cart</Link>
        <Link to="/orders"><i className="fa fa-fw fa-shopping-bag"></i> Orders</Link>
    </div>
);

export default Header;
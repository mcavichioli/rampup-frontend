import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Products from '../pages/products/Products';
import Cart from '../pages/cart/Cart';
import Orders from '../pages/orders/Orders';
import Login from '../pages/login/Login';
import Header from '../shared/components/Header/Header';

const PrivateRoute = () => (
    <Route />
)

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
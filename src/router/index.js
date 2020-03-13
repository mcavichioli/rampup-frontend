import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from '../pages/products/Products';
import Cart from '../pages/cart/Cart';
import Header from '../shared/components/Header/Header';


const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
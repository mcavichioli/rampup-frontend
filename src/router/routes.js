import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from '../pages/products/Products.js';

const Routes = () => (
    <BrowserRouter>
        {/* Switch faz com que apenas uma página possa ser exibida a cada rota */}
        <Switch>
            <Route exact path="/" component={Products} />
            {/* <Route path="/products/:id" component={Product} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;
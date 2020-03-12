import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from '../pages/products/Products';
import Cart from '../pages/cart/Cart';
import store from '../store/index.js';
import { Provider } from 'react-redux';


const Routes = () => (
    <BrowserRouter>
        {/* Switch faz com que apenas uma página possa ser exibida a cada rota */}
        <Switch>
            <Provider store={store}>
                <Route exact path="/" component={Products} />
                <Route path="/cart" component={Cart} />
            </Provider>
        </Switch>
    </BrowserRouter>
);

export default Routes;
import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Nav from './Nav';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter,Route } from 'react-router-dom';




const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
           
            <Nav />
            <Route exact path="/" component={Products}></Route>
            
            <Route  path="/card" component={Cart}></Route>
            </CartProvider>
            
            </BrowserRouter>
    )
}




export default App

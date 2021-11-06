import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav'
import HomePage from '../components/pages/HomePage'
import BlogsPage from '../components/pages/BlogsPage'
import BlogPageDetails from '../components/pages/BlogPageDetails'
import ServicePage from '../components/pages/ServicePage'
import ContactPage from '../components/pages/ContactPage'
import NotFoundPage from '../components/pages/NotFoundPage'



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            
           <div className="container">
           <Switch>
           <Route path="/" component={HomePage} exact></Route>
            <Route path="/blogs" component={BlogsPage}></Route>
            <Route path="/blog/:id" component={BlogPageDetails}></Route>
            <Route path="/service" component={ServicePage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route component={NotFoundPage}></Route>
            </Switch>
           </div>
            
           
        </BrowserRouter>
    )
}

export default AppRouter

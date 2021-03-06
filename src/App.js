import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Category from "./pages/category/Category"
import About from './pages/About'
import Checkout from './layouts/Checkout'
import './responsive.scss'
const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/product/:id" component={SingleProduct} />
                    <Route path="/about" component={About}/>
                    <Route path="/:catTitle" component={Category}/>
                </Switch>
            </Router>
        </Provider>
        )
    }
export default App

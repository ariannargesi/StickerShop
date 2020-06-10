import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* <Route path="/product/:id" component={Product}  /> */}
                <Route path="/product/:id" component={SingleProduct} />
            </Switch>
        </Router>
    )
}
export default App
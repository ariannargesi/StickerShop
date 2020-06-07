import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Product from './components/Product'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/product/:id" component={Product}  />
            </Switch>
        </Router>
    )
}
export default App
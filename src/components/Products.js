import React from 'react'
import axios from 'axios'
import ProductItem from "./ProductItem";

class ProductsGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [

            ]
        }
    }
    componentDidMount() {
        // fetching products using api and updating the state
        axios.get(`http://localhost:3000/api/products-list?from=1&to=${this.props.num}`).then(response => {
            this.setState({
                products: [
                    ...response.data
                ]
            })

        }).catch(err=>{

        })
    }

    render(){
        // render products
        const productCount = this.props.num
        if(this.state.products.length === 0)
            return "... Loading"
        return this.state.products.slice(0,5).map((item,index) =>{
            return (
            <ProductItem key={index} item={item} id={index} />
        )
        }
        )
    }
}
export default ProductsGroup
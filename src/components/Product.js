import React from 'react'
import axios from 'axios'
class Product extends React.Component {
     constructor() {
         super();
         this.state = {
             product: {

             }
         }
     }
     componentDidMount() {
         console.log(this.state)
        const productId = this.props.match.params.id
        axios.get(`http://localhost:3000/api/product/${productId}`).then(response => {
            this.setState({
                product: response.data
            })
        })

    }

    render(){
        return (
            <div>
                {this.state.product.name}
                {this.state.product.price}
            </div>
        )
    }
}
export default Product
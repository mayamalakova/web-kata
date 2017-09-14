import React, { Component } from 'react';
import Product from './Product.js'

class Products extends Component {

    render() {
        return <ul>
            {this.props.products.map((p) => <Product key={p.name} product={p}/>)}
            </ul>
    }
}

export default Products;
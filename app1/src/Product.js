import React, { Component } from 'react';

class Product extends Component {

    render() {
        const p = this.props.product;
        return <li>{p.name} - {p.description}</li>
    }
}

export default Product;
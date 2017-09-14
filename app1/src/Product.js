import React, { Component } from 'react';

class Product extends Component {

    render() {
        const p = this.props.product;
        return <li>{this.getTags(p)} {p.name} - {p.description}</li>
    }

    getTags(p) {
        let tags = [];
        if (p.free) {
            tags.push("Free");
        }

        if (p.new) {
            tags.push("New");
        }
        return tags.map((t) => <b key={t}>{t}</b>);
    }
}

export default Product;
import React, { Component } from 'react';
import './app.css';

const products = [
  {
    test1: 'test test'
  },
  {
    test2: 'test test'
  },
  {
    test3: 'test test'
  }
];

class Products extends Component {
  render() {
    return (
      <section>
        <h1>Contact list HERE!</h1>
        {products.map(product => (
          <div>
            <header>name: {product.name}</header>
            <p>
              <img src={product.photo} alt="User" />
            </p>
            <p>adress {product.adress}</p>
            data_ur {product.data_ur}
            <span></span>
            <p>email user {product.email}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Products;

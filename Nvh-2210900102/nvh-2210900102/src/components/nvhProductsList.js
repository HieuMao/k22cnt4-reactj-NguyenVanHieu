import React, { Component } from 'react';
import './NvhProductsList.css';

class NvhProductsList extends Component {
  render() {
    const { products } = this.props; // Nhận props products từ App

    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.nvh_productId}>
              <td>{product.nvh_productId}</td>
              <td>{product.nvh_productName}</td>
              <td>{product.nvh_quantity}</td>
              <td>{product.nvh_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default NvhProductsList;

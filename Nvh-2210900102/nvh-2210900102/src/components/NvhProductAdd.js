import React, { Component } from 'react';

class NvhProductAdd extends Component {
    state = {
        productId: '',
        productName: '',
        quantity: '',
        price: ''
      };
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { productId, productName, quantity, price } = this.state;
        this.props.onAddProduct({ nvh_productId: productId, nvh_productName: productName, nvh_quantity: Number(quantity), nvh_price: Number(price) });
        this.setState({ productId: '', productName: '', quantity: '', price: '' });
      };
    
    render() {
        const { productId, productName, quantity, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input type="text" name="productId" value={productId} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Product Name:</label>
          <input type="text" name="productName" value={productName} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={quantity} onChange={this.handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={price} onChange={this.handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    );
  }
}
export default NvhProductAdd;
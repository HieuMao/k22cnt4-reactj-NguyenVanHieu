import React, { Component } from 'react';
import NvhProductsList from './components/nvhProductsList';
import './App.css';
import NvhProductAdd from './components/NvhProductAdd';

class App extends Component {
  state = {
    nvh_Products: [
    {
      nvh_productId: "2210900102",
      nvh_productName: "Nguyễn Văn Hiếu",
      nvh_quantity: 15,
      nvh_price: 1000
    },
    {
      nvh_productId: "P002",
      nvh_productName: "IPhone 12",
      nvh_quantity: 20,
      nvh_price: 1250
    },
    {
      nvh_productId: "P003",
      nvh_productName: "IPhone 13",
      nvh_quantity: 10,
      nvh_price: 1500
    }
  ]
};
handleAddProduct = (newProduct) => {
  this.setState((prevState) => ({
    nvh_Products: [...prevState.nvh_Products, newProduct]
  }));
};
  render() {
    return (
      <div>
        <h1>Product List</h1>
        {/* Truyền state nvh_Products vào component NvhProductsList */}
        <NvhProductsList products={this.state.nvh_Products} />
        <NvhProductAdd onAddProduct={this.handleAddProduct} />
      </div>
    );
  }
}

export default App;
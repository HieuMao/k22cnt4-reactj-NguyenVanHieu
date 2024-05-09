import React, { Component } from 'react';
import NvhProductList from './components/NvhProductList.js';
import NvhProductAdd from './components/NvhProductAdd.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      products : [
        { title: "Nguyễn Văn Hiếu", id: 2210900102 , status:1 },
        { title: "Cabbage", id: 1 , status:1},
        { title: "Garlic", id: 2 , status:0},
        { title: "Apple", id: 3 , status:0},
        { title: "Mango", id: 4 , status:1},
      ]
    }
  }
  nvhHandleSubmit = (param)=> {
    console.log("App: ",param);
    // thêm vào product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }


    render() {
    return (
      <div className='container border mt-5 '>
        <h1>Nguyễn Văn Hiếu - Render Event Form</h1>
        <hr/>
        <NvhProductList renderProducts={this.state.products}/>
        <hr/>
        <NvhProductAdd onSubmit =  {this.nvhHandleSubmit} />

      </div> 
    );
  }
}

export default App;

import './App.css';
import { React,useState } from 'react';
import NvhProductAddOrEdit from './components/NvhProductAddOrEdit';
import NvhListProduct from './components/nvhListProduct';



function NvhApp() {
/// mock data
const Nvh_Products = [
  {
      Nvh_productId:"2210900102"      
     ,Nvh_productName:"Nguyễn Văn Hiếu"      
     ,Nvh_quantity:15       
     ,Nvh_price:1000
  },
  {
        Nvh_productId:"P002"
      , Nvh_productName:"IPhone 12"
      , Nvh_quantity:20
      , Nvh_price:1250
  },
  {
      Nvh_productId:"P003"
      , Nvh_productName:"IPhone 13"
      ,  Nvh_quantity:10
      , Nvh_price:1500
  },
]



/// sử dụng hàm usestate của hook


const [NNvhListProduct, setNNvhListProduct] = useState(Nvh_Products)

const nvhHandleSubmit= (NvhProduct)=>{
  console.log("AddOrEdit:",NvhProduct)
  /// thêm vào nvhlistproduct
  setNNvhListProduct((NvhPrev) =>{
    return [
      ...NvhPrev,
      NvhProduct
    ]
  })
}

  return (
    <div className="container border mt-5 p-3 ">
      <h1 className= "text-center my-3">
        Xử lý chức năng CRUD - Hook
      </h1>
      <hr/>
      <NvhListProduct renderNvhProducts = {NNvhListProduct}/>
      <NvhProductAddOrEdit NvhOnSubmit={nvhHandleSubmit}/>
    </div>
  );
}

export default NvhApp;

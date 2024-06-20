import { useState, useEffect } from 'react';
import './App.css';
import NvhCategoryList from './components/NvhCategoryList';
//import api
import axios from './api/NvhApi';
import NvhCategoryForm from './components/NvhCategoryForm';

function NvhApp() {
  /// lấy dữu liệu từ api
  const [nvhCategories, setNvhCategories] = useState([]);

  const getCategories = async () => {
    try {
      const nvhCateResponse = await axios.get("NvhCategory");
      setNvhCategories(nvhCateResponse.data);
    } catch (error) {
      console.log("lỗi:", error);
    }
  }
    useEffect(() => {
      getCategories();
      console.log("nvhCategories:", nvhCategories);
    }, [])

    // trạng thái form
    const [nvhCategoryIsForm, setNvhCategoryIsform]= useState(false);
    // dư liệu form add edit
    let nvhCategoryInit={
      nvhId:0,
      nvhCategoryName:"",
      nvhCategoryStatus:true,
    }
    const [nvhCategoryEdit, setNvhCategoryEdit]= useState(nvhCategoryInit);
    const nvhHandleAddNew = (param )=>{
      setNvhCategoryIsform(param);
    }
    const nvhHandleCategoryCloseForm=(param)=>{
      setNvhCategoryIsform(param);
    }
    // const nvhHandleCategorySubmit=(param)=>{
    //   let id= nvhCategories[nvhCategories.length-1].nvhId;
    //   console.log("Mã ",id);
    //   param.nvhId= id+1;
    //   nvhCategories.push(param);
    //   setNvhCategories((prev)=>{
    //     return [...prev];
    //   })
    //   setNvhCategoryIsform(false);
    // }
    const nvhHandleCategorySubmit = (param) => {
      let lastId = parseInt(nvhCategories[nvhCategories.length - 1].nvhId, 10);
      console.log("Mã ", lastId);
      param.nvhId = lastId + 1;
      nvhCategories.push(param);
      setNvhCategories((prev) => [...prev]);
      setNvhCategoryIsform(false);
    };
    // hàm sử lý sự kiện xóa 
    const nvhHandleDelete= (nvhId)=>{
      console.log("App-Delete-nvhId:",nvhId);
      // hàm xóa trên api
      //const nvhResponse = axios.delete(`https://666c2e0a49dbc5d7145cfc80.mockapi.io/nvhApi/nvhV1/NvhCategory/${nvhId}`);
      const nvhResponse = axios.delete(`NvhCategory/${nvhId}`);
      console.log("nvhRespone-Delete:",nvhResponse);
      let nvhDelete= nvhCategories.filter(x=>x.nvhId !== nvhId );
      setNvhCategories(nvhDelete);
      console.log("Deleted:",nvhDelete);
    }
    // edit cate
    const nvhHandleEdit = (nvhCategory)=>{


      setNvhCategoryEdit(nvhCategory)
     setNvhCategoryIsform(true); 
    }
    

    return (
      <div className="container border my-3">
        <h1>NGUYỄN VĂN HIẾU - CAll Api</h1>
        <NvhCategoryList renderNvhCategories={nvhCategories}
                        onAddNew={nvhHandleAddNew}
                        onNvhDelete={nvhHandleDelete}
                        onNvhEdit={nvhHandleEdit}/>
        <hr/>
        {
          nvhCategoryIsForm===true?<NvhCategoryForm 
                                                  renderNvhCategory = {nvhCategoryEdit}
                                                  onCloseForm={nvhHandleCategoryCloseForm}
                                                  onCategorySubmit={nvhHandleCategorySubmit}/>:""
        }     
      </div>
    );
  }

  export default NvhApp;

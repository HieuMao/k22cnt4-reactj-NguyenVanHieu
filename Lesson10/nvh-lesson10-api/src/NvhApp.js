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


    return (
      <div className="container border my-3">
        <h1>NGUYỄN VĂN HIẾU - CAll Api</h1>
        <NvhCategoryList renderNvhCategories={nvhCategories}
                        onAddNew={nvhHandleAddNew}/>
        <hr/>
        {
          nvhCategoryIsForm===true?<NvhCategoryForm 
                                                  onCloseForm={nvhHandleCategoryCloseForm}
                                                  onCategorySubmit={nvhHandleCategorySubmit}/>:""
        }     
      </div>
    );
  }

  export default NvhApp;

import React,{useState,useEffect} from 'react'
import axios from '../api/NvhApi';

export default function NvhCategoryForm({onCloseForm, onCategorySubmit,renderNvhCategory}) {

  /// State
  const [nvhId,setNvhId ]= useState("");
  const [nvhCategoryName,setNvhCategoryName]= useState("");
  const [nvhCategoryStatus,setNvhCategoryStatus]= useState(true);

  useEffect(()=>{
      setNvhId(renderNvhCategory.nvhId)
      setNvhCategoryName(renderNvhCategory.nvhCategoryName)
      setNvhId(renderNvhCategory.nvhCategoryStatus)
  }) 

  const nvhHandleClose = ()=>{
    onCloseForm(false);
  }
  const nvhHandleSubmit = async (event )=>{
    event.preventDefault();
    if(nvhId == 0){
      //thêm
    let nvhCategory={
      nvhId:0,
      nvhCategoryName:nvhCategoryName,
      nvhCategoryStatus:nvhCategoryStatus,
    }
    console.log("nvhCategory",nvhCategory);
    await axios.post("NvhCategory",nvhCategory);
    onCategorySubmit(nvhCategory); 
    }else{ // sửa
      let nvhCategory ={
          nvhId:nvhId,
          nvhCategoryName:nvhCategoryName,
          nvhCategoryStatus:nvhCategoryStatus

      }
      console.log("nvhCategory",nvhCategory);
      await axios.put("NvhCategory",nvhCategory);
      onCategorySubmit(nvhCategory);
    }
  }
  return (
    <div>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Category Name </span>
          <input type="text" className="form-control"
            name="nvhCategoryName"
            value={nvhCategoryName}
            onChange={(ev)=>setNvhCategoryName(ev.target.value)}
            placeholder="Category Name" aria-label="Category Name"
              aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Category Status </span>
          <select className="form-control"
            name="nvhCategoryStatus"
            value={nvhCategoryStatus}>
            onChange={(ev)=>setNvhCategoryStatus(ev.target.value)}
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
            </select>        
        </div>
        <button className='btn btn-success' onClick={nvhHandleSubmit}>Ghi lại</button>
        <button className='btn btn-danger' onClick={nvhHandleClose}>Đóng</button>
      </form>

    </div>
  )
}

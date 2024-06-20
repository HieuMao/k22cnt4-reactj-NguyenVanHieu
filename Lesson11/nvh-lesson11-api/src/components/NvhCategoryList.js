import React from 'react'

export default function NvhCategoryList({renderNvhCategories,onAddNew,onNvhDelete,onNvhEdit }) {
    console.log("renderNvhCategories: ", renderNvhCategories );
    let nvhCategoryElement = renderNvhCategories.map((nvhCategory,Index)=>{
        return(
            <tr key= {Index}>
                <th>{Index+1}</th>
                <td>{nvhCategory.nvhId}</td>
                <td>{nvhCategory.nvhCategoryName}</td>
                <td>{nvhCategory.nvhCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
                <td>
                <button className='btn btn-danger' 
                    onClick={()=>nvhHandleDelete(nvhCategory.nvhId)}>Delete</button>
                <button className='btn btn-success'
                    onClick={()=>nvhHandleEdit(nvhCategory)}>Edit
                </button>
                </td>
            
            </tr>
        )
    })

    const nvhHandleAdd = ()=> {
        onAddNew(true);
    }
    // hàm delete
    const nvhHandleDelete = (nvhId)=>{       
        if(window.confirm('Bạn có thực sự muốn xóa Category có mã ['+nvhId+'] không? ')){
            console.log("Delete:",nvhId);
            onNvhDelete(nvhId)
        }else{

        }
    }
    // hàm edit
    const nvhHandleEdit =(nvhCategory)=>{
        onNvhEdit(nvhCategory)
    }
  return (
    <div className='container m-2'>
        <h2>Danh sách loại sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã Loại</th>
                    <th>Tên Loại </th>
                    <th>Trạng thái </th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <tbody>
            {nvhCategoryElement}
            </tbody>
        </table>
      <button className='btn btn-primary' onClick={nvhHandleAdd}>Thêm mới </button>
    </div>
  )
}

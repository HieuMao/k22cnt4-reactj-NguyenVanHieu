import React from 'react'

export default function NvhCategoryList({renderNvhCategories,onAddNew }) {
    console.log("renderNvhCategories: ", renderNvhCategories );
    let nvhCategoryElement = renderNvhCategories.map((nvhCategory,Index)=>{
        return(
            <tr key= {Index}>
                <th>{Index+1}</th>
                <td>{nvhCategory.nvhId}</td>
                <td>{nvhCategory.nvhCategoryName}</td>
                <td>{nvhCategory.nvhCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
            
            </tr>
        )
    })

    const nvhHandleAdd = ()=> {
        onAddNew(true);
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

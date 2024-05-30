import React from 'react'

export default function NvhListProduct({renderNvhProducts}) {
    console.log("List Product:", renderNvhProducts);
    let NvhTong=0;

    let NvhElementProduct = renderNvhProducts.map((NvhProduct, index)=> {
      NvhTong += NvhProduct.Nvh_quantity*NvhProduct.Nvh_price; 
        return(
            <>
            <tr key = {index}>
                <td>{index + 1}</td>
                <td>{NvhProduct.Nvh_productId}</td>
                <td>{NvhProduct.Nvh_productName}</td>
                <td>{NvhProduct.Nvh_quantity}</td>
                <td>{NvhProduct.Nvh_price}</td>
                <td>{NvhProduct.Nvh_quantity*NvhProduct.Nvh_price} </td>
                <td>
                  <button className= 'btn btn-success mx-1 '>
                  <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className= 'btn btn-danger mx-1 '>
                  <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
                
            </tr>
            </>
        )
    })
  return (
    <div>
      <h2>Danh sách sản phẩm </h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã sản phẩm </th>
                <th>Tên sản phẩm </th>
                <th>Số lượng </th>
                <th>Đơn giá </th>
                <th>Thành tiền </th>
                <th>Chức năng </th>
            </tr>

        </thead>
        <tbody>
            {NvhElementProduct}
        </tbody>
        <tfoot>
          <tr>
            <th colspan={5} className= 'text-end '> Tổng cộng </th>
            <th colspan={2} className= 'text-start '>   
              {NvhTong}
              </th>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}

import React, {useState} from 'react'

export default function NvhProductAddOrEdit({NvhOnSubmit}) {
    const [Nvh_productId, setNvh_productId] = useState('')
    const [Nvh_productName, setNvh_productName] = useState('')
    const [Nvh_quantity, setNvh_quantity] = useState('')
    const [Nvh_price, setNvh_price] = useState('')

    const nvhHandleSummit = (nvhEvent )=>{
        nvhEvent.preventDefault();
        let NvhProduct = {
            Nvh_productId:Nvh_productId,
            Nvh_productName:Nvh_productName,
            Nvh_quantity:Nvh_quantity,
            Nvh_price:Nvh_price,

        }
        NvhOnSubmit(NvhProduct)
    }
    return (
        <div className='col-md-6'>
        <h2>Thêm mới sản phẩm / Sửa đổi</h2>
        <hr/>
        <form>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name= 'Nvh_productId' value= {Nvh_productId}
                onChange={(ev) => setNvh_productId(ev.target.value)}
                aria-describedby="basic-addon1" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                <input type="text" className="form-control" placeholder="Tên sản phẩm"
                name= 'Nvh_productName' value= {Nvh_productName}
                onChange={(ev) => setNvh_productName(ev.target.value)}
                    aria-describedby="basic-addon2" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
                name= 'Nvh_quantity' value= {Nvh_quantity}
                onChange={(ev) => setNvh_quantity(ev.target.value)}
                aria-describedby="basic-addon3" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Đơn giá "
                name= 'Nvh_price' value= {Nvh_price}
                onChange={(ev) => setNvh_price(ev.target.value)}
                aria-describedby="basic-addon4" />
        </div>
        <button className ='btn btn-primary'name='NvhBtnAction'
        onClick={nvhHandleSummit}
        > 
            Thêm mới
        </button>
        </form>
        </div>
  )
}

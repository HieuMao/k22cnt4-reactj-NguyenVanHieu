import React from 'react'

export default function nvhStudentList({renderNvhStudentList}) {
    console.log("Data:",renderNvhStudentList);
    let nvhElement =  renderNvhStudentList.map((nvhStudent, index)=>{
        return(
            <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{nvhStudent.nvhId}</td>
                    <td>{nvhStudent.nvhName}</td>
                    <td>{nvhStudent.nvhAge}</td>
                    <td>{nvhStudent.nvhPhone}</td>
                    <td>{nvhStudent.nvhEmail}</td>
                    
                    <td>{nvhStudent.nvhStatus}</td>
                    <td>
                        Edit / Delete
                    </td>
                        
            </tr>
        )

    });
    return (
        <div>
            <h2>Danh sách sinh viên </h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã Sinh Viên</th>
                        <th scope="col">Họ Tên </th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện Thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvhElement}
                </tbody>
            </table>

        </div>
    )
}

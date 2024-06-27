import React from 'react'

export default function NvhListUsers({ renderNvhListUsers }) {
    console.log("NvhListUsers:", renderNvhListUsers);
    // hiener thi đữ liệu
    let nvhElementUser = renderNvhListUsers.map((nvhUser, index) => {
        return (
            <>
                <tr>
                    <td>{nvhUser.id}</td>
                    <td>{nvhUser.UserName}</td>
                    <td>{nvhUser.Password}</td>
                    <td>{nvhUser.Email}</td>
                    <td>{nvhUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })


    return (
        < div className='row' >
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nvhElementUser}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

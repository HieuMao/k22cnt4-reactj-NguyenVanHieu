import React from 'react'

export default function NVH_FuncDemo(props){
    return(
        <div>
            <hr/>
            <h2>function component Demo </h2>
            <h3> su dung thuoc tinh props</h3>
            <p>userName:{props.userName}</p>
            <p>FullName:{props.fullName}</p>
            <p>Age:{props.age}</p>

        </div>
    )
}
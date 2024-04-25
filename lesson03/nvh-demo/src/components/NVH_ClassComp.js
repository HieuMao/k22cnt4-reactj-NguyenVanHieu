import React, {Component, component} from 'react';

class NVH_ClassComp extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state={
            firstName:"Nguyễn",
            lastName:"Hiếu",
            userName:"K22CNTT4",
        }
    }
    // arrow function 
    Member=(props)=>{
        return (
            <div className='alert alert-success '>
                <h3> Xin Chao:{props.fullName}-Ban da {this.props.age} Tuoi.</h3>
            </div>
        )
    }

    listMember =()=>{
        return (
            <>
            <this.Member fullName ="Nguyen van A" age="20" />
            <this.Member fullName ="Nguyen van B" age="22" />
            <this.Member fullName ="Nguyen van C" age="21" />
            <this.Member fullName ="Nguyen van D" age="23" />
            </>
        )
    }
    render(){
        return (
            <div className='alert alert-danger '>
                <h2> Class Component Demo</h2>
                <hr/>
                <h3> Du lieu trong state </h3>
                <h3> Xin Chao:{this.state.firstName} {this.state.lastName}</h3>
                <hr/>
                <h3> du dieu tu props </h3>
                <p> Component:{this.props.company}</p>
                <p> Course:{this.props.course}</p>
                <hr/>
                <this.Member fullName="Nguyễn Văn Hiếu " age ="18"/>
                <hr/>
                {/* {this.listMember} */}
                <this.listMember />

            </div>
        )
    }
}

export default NVH_ClassComp;
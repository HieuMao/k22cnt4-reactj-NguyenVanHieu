
import './App.css';
import NvhListUsers from './components/NvhListUsers';
import axios from './api/nvhApi'
import {useEffect, useState} from 'react';


function NvhApp() {

  const [nvhlistUsers, setNvhListUsers] = useState([]);
// đọc dữ liệu từ api
const nvhGetAllUsers = async ()=>{
  const nvhResponse = await axios.get("nvhUsers");
  console.log("Api Data:", nvhResponse.data);
  setNvhListUsers (nvhResponse.data)
}

  useEffect(()=>{
  nvhGetAllUsers();
  },[])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <NvhListUsers renderNvhListUsers={nvhlistUsers}/>
    </div>
  );
}

export default NvhApp;

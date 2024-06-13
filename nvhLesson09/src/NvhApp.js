
import './App.css';
import { React,useState,useEffect} from 'react';
import axios from "axios";
import NvhStudentList from './components/NvhStudentList';



function NvhApp() {
/// mock data


/// sử dụng hàm usestate của hook
const [nvhStudentList, setNvhStudentList]=useState([]);
// get data from api 
const nvhGetStudent  = async () => {
  try {
    const response = await axios.get("https://666a9eb57013419182d018ab.mockapi.io/api/nvhv1/nvhStudent");
    setNvhStudentList(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
  nvhGetStudent();
}, []);

  return (
    <div className="container border mt-5 p-3 ">
      <h1 className= "text-center my-3">
        Xử lý chức năng CRUD - Hook - Api
      </h1>
      <hr/>
        <NvhStudentList renderNvhStudentList = {nvhStudentList}/>
    </div>
  );
}

export default NvhApp;
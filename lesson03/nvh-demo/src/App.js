import logo from './logo.svg';
import './App.css';
import NVH_FuncDemo from './components/NVH_FuncDemo';
import NVH_ClassComp from './components/NVH_ClassComp';

function App() {
  //Khai báo biến đối tượng
  const users={
    userName:"K22cntt4",
    password:"123456a@",
    fullName:" Nguyễn Văn ",
    lastName:"Hiếu"
  }
  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2> Xin chao ,{user.fullName} {user.lastName}</h2>
  }
  return (
    <div className="App">
      {/* Biểu Thức Jsx */}
      <div>
        <p> FullName:{users.fullName}{ users.lastName}</p>
        { formatName(users)}
      </div>

      {/* su dung function component */}
      <div>
        <NVH_FuncDemo/>
        {/* su dung func_comp co props */}
        <NVH_FuncDemo userName="NVH" fullName="Nguyễn Văn Hiếu" age="18" />
      </div>
      {/* su dung class component */}
      <div>
        {/* dung khong su dung props */}
        <NVH_ClassComp/>
        {/* su dung props */}
        <NVH_ClassComp company="Fit-NTU-K22CNTT3" course="ReactJs" />
        <NVH_ClassComp company="Fit-NTU-K22CNTT4" course="ReactJs 1" />
        <NVH_ClassComp company="Fit-NTU-K22CNTT3" course="ReactJs 2" />
        <NVH_ClassComp company="Fit-NTU-K22CNTT6" course="ReactJs 3" />

      </div>
    </div>
  );
}

export default App;

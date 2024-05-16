import React, { createContext, useState} from 'react'
import NvhUseContext1 from './NvhUseContext1';
export const ThemeContext = createContext();// tạo ngữ cảnh 

export default function NvhUseContext() {
    // state
    const [theme,setTheme] = useState('red');
    // hàm thay đổi ng
    const nvhHandleChange = ( )=>{
        setTheme(theme=='red'?'blue':'red');

    }
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>demo context </h2>
      <NvhUseContext1 />
      <button onClick={nvhHandleChange}>Change Bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}

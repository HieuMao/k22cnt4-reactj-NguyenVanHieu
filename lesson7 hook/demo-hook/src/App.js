import React from 'react'
import NvhUseState from './components/NvhUseState'
import NvhUseEffect from './components/NvhUseEffect'
import NvhUseContext from './components/NvhUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 ClassName= 'text-center'> Nguyễn Văn Hiếu</h1>
      <hr/>
      <NvhUseState/>
      <hr/>
      <NvhUseEffect/>
      <hr/>
      <NvhUseContext />
    </div>
  )
}
        
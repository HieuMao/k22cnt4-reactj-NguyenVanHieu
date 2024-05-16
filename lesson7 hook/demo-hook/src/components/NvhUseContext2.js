import React, { useContext } from 'react'
import { ThemeContext} from './NvhUseContext'

export default function NvhUseContext2() {
    const theme = useContext(ThemeContext  )
  return (
    <div className={theme} >
      <h2>NvhUseContext2</h2>
      <p>
        <b>2210900102</b>
        <b>Nguyễn Văn Hiếu</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}

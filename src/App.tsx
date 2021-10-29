import React, { useState } from 'react'
import './App.less'
import { list } from './params'
// @ts-ignore
import logo from './assets/images/logo.jpg'

const App = () => {
  const [count, setCount] = useState<number>(2)
  return (
    <div>
      <div className={'numberColor'}>{count}</div>
      <button onClick={ () => setCount(count-1) }>点击-</button>
      <button onClick={ () => setCount(count+1) }>点击+</button>
      <div>
        {
          list.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
        <li >{list.find(item => item === 1)}</li>
      </div>
      <img src={logo} alt="" />
    </div>
  )
}

export default App

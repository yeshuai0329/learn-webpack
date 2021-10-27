import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(2)
  return (
    <div>
      <div>{count}</div>
      <button onClick={ () => setCount(count-1) }>点击-</button>
      <button onClick={ () => setCount(count+1) }>点击+</button>
    </div>
  )
}

export default App

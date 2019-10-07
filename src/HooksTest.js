import React from "react"
import { useState } from "react"

function HooksTest() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  )
}

export default HooksTest

import React from "react"
// 第一个组件

function App(props) {
  const [n, setN] = React.useState(0) // 内部的数据

  return (
    <div
      className="App"
      onClick={() => {
        setN(n + 1)
      }}
    >
      {n}
      {props.name}
    </div>
  )
}

export default App

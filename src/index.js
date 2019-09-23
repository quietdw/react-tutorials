import React from "react"
import ReactDOM from "react-dom" // 虚拟Dom

import { createStore } from "redux"

function counter(state, action) {
  state = state || { number: 0 }

  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + action.payload } // 2. 根据操作生成新的state
    case "DECREMENT":
      return { number: state.number - action.payload }
    default:
      return { number: state.number }
  }
}

let store = createStore(counter)

class TestStore extends React.Component {
  add() {
    store.dispatch({ type: "INCREMENT", payload: 2 }) // 1. dispatch 一个操作
  }

  minus() {
    store.dispatch({ type: "DECREMENT", payload: 2 })
  }

  render() {
    return (
      <div>
        {this.props.store.number}
        <button
          onClick={() => {
            this.add()
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.minus()
          }}
        >
          -2
        </button>
      </div>
    )
  }
}

const render = store => {
  ReactDOM.render(
    <TestStore store={store.getState()} />,
    document.getElementById("root")
  )
}

render(store)

store.subscribe(() => {
  render(store)
}) // 接收到事件重新render

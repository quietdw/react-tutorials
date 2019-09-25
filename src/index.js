import React from "react"
import ReactDOM from "react-dom" // 虚拟Dom
import ReactReduxTest from "./ReactReduxTest.js"
import { createStore } from "redux"
import { Provider } from "react-redux"

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

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxTest />
  </Provider>,
  document.getElementById("root")
)

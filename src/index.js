import React from "react"
import ReactDOM from "react-dom" // 虚拟Dom

import { createStore } from "redux"

function counter(state, action) {
  state = state || { number: 0 }

  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 }
    case "DECREMENT":
      return { number: state.number - 1 }
    default:
      return { number: state.number }
  }
}

let store = createStore(counter)

class TestStore extends React.Component {
  add() {
    store.dispatch({ type: "INCREMENT" })
  }

  minus() {
    store.dispatch({ type: "DECREMENT" })
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
          +
        </button>
        <button
          onClick={() => {
            this.minus()
          }}
        >
          -
        </button>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TestStore store={store.getState()} />,
    document.getElementById("root")
  )
}

render()

store.subscribe(render)

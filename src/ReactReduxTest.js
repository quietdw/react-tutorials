import React from "react"
import { connect } from "react-redux"

class ReactReduxTest extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+2</button>
        <button onClick={this.props.minus}>-2</button>
      </div>
    )
  }
}

function getPartialStore(state) {
  return { number: state.number }
}
const actionCreater = {
  add() {
    return { type: "INCREMENT", payload: 2 }
  },
  minus() {
    return { type: "DECREMENT", payload: 2 }
  }
}

export default connect(
  getPartialStore,
  actionCreater
)(ReactReduxTest)

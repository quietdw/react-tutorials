import React from "react"
import "./contextTest.css"

const nContext = React.createContext(100)

function Button0(props) {
  return (
    <div>
      0<button onClick={props.setN}>{props.n}</button>
    </div>
  )
}

function Button1() {
  return (
    <div className="bordered">
      <div>1</div>
      <nContext.Consumer>
        {value => <Button0 setN={value.setN} n={value.n} />}
      </nContext.Consumer>
    </div>
  )
}

function Button2() {
  return (
    <div className="bordered">
      2<Button1 />
    </div>
  )
}

function Button3() {
  return (
    <div className="bordered">
      3<Button2 />
    </div>
  )
}

class ContextTest extends React.Component {
  constructor() {
    super()
    this.state = {
      value: {
        n: 99,
        setN: () => {
          this.setState({
            value: { ...this.state.value, n: this.state.value.n - 1 }
          })
        }
      }
    }
  }
  render() {
    return (
      <div>
        <nContext.Provider value={this.state.value}>
          {/* 局部的全局变量，consumer只能在provider里使用 */}
          <Button3 />
        </nContext.Provider>
      </div>
    )
  }
}

export default ContextTest

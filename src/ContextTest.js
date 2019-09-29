import React from "react"
import "./contextTest.css"

const nContext = React.createContext(100)

function Button0(props) {
  return (
    <div>
      0<button>{props.n}</button>
    </div>
  )
}

function Button1() {
  return (
    <div className="bordered">
      <div>1</div>
      <nContext.Consumer>{n => <Button0 n={n} />}</nContext.Consumer>
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
  render() {
    return (
      <div>
        <nContext.Provider value={99}>
          <Button3 />
        </nContext.Provider>
      </div>
    )
  }
}

export default ContextTest

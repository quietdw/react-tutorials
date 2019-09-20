import React from "react"
import ReactDOM from "react-dom" // 虚拟Dom
import Containment from "./Containment.js"

ReactDOM.render(
    <Containment left={<p>left</p>} right={<p>right</p>}></Containment>
    , document.getElementById("root"))






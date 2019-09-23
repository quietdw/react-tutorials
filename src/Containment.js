import React from "react"





class Containment extends React.Component {

    render() {
        return (
            <div><div className="left">
                {this.props.left}
            </div>
                <div className="right">
                    {this.props.right}
                </div></div>
        )
    }
}

// class Containment extends React.Component {

//     render() {
//         return (
//             <div>{
//                 this.props.children
//             }</div>
//         )
//     }
// }

export default Containment
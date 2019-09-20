import React from "react"

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
    }

    handleButtonClick() {


        this.setState({ toggle: !this.state.toggle })
    }
    render() {

        return (
            <div>

                <button onClick={() => { this.handleButtonClick() }}>Toggle</button>
                {this.state.toggle ? '' : '隐藏的内容'}
            </div>
        )
    }
}

export default Toggle
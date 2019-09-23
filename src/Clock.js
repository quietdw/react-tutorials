import React from "react"

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date() // 构造函数是唯一可以给 this.state 赋值的地方
        }
    }

    tick() {
        this.setState({ date: new Date() })
    }

    componentDidMount() { //组件输出到 DOM 
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() { // 组件被从DOM中移除
        clearInterval(this.timerID)
    }

    render() {

        return (
            <div>
                <h1>你好！</h1>
                <h1>现在{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock
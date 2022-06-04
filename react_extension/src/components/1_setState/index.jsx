import React, { Component } from 'react'

export default class Demo extends Component {
    
    
    state = {
        count: 0
    }

    
    addNumber = () => {
        /* 对象式setState */
        /* 
        setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在【状态更新完毕、界面也更新后】(render调用后)才被调用
        */
        /*  const {count} = this.state;
        this.setState({
            count: count + 1
        }, () => {
            console.log('callback', this.state.count);
        })
        console.log('setstate后输出', this.state.count, count); */



        /* 函数式setState */
        /* 
            setState(updater, [callback])------函数式的setState
                1.updater为返回stateChange对象的函数。
                2.updater可以接收到state和props。
                4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
        */

        this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1}
        })
    }

    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count} </h2>
                <button onClick={this.addNumber} >点我+1</button>
            </div>
        )
    }
}

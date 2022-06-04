import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const UserNameContext = React.createContext()


export default class A extends Component {
    state = {
        username: 'yuan'
    }
    render() {
        return (
            <div className="parent">
                <h2>我是A组件</h2>
                <h4>我的组件名是：{this.state.username}</h4>
                {/* <B username={this.state.username} /> */}

                <UserNameContext.Provider value={this.state.username}>
                    <B />
                </UserNameContext.Provider>

            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h2>我是B组件</h2>
                <h2>我从a收到的用户名是：{this.props.username}</h2>
                <C  />
            </div>
        )
    }
}


class C extends Component {
    static contextType = UserNameContext;
    
    render() {
        console.log(this.context);
        return (
            <div className="grand">
                <h2>我是C组件</h2>
                <h4>我从A组件接收到的用户名是：xx</h4>
            </div>
        )
    }
}


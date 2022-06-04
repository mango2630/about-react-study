import React, { Component } from 'react'
import '../5_context/index.css'

export default class A extends Component {
    state = {
        username: 'yuan'
    }
    render() {
        return (
            <div className="parent">
                <h2>我是A组件</h2>
                <h4>我的组件名是：{this.state.username}</h4>
                <B render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class B extends Component {
    state = {name: 'tom'}
    render() {
        console.log(this.props.children);
        return (
            <div className="child">
                <h2>我是B组件</h2>
                {this.props.children}
                
                {this.props.render(this.state.name)}
            </div>
        )
    }
}


class C extends Component {
    
    render() {
        return (
            <div className="grand">
                <h2>我是C组件</h2>
                <h4>我从A组件接收到的用户名是：xx</h4>
            </div>
        )
    }
}


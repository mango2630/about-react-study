import React, { Component } from 'react'
import './index.css'

// 创建context对象
const MyContext = React.createContext();
const {Provider, Consumer} = MyContext
class A extends Component {
    
    state = {username : 'tom'}
    
    render() {
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{this.state.username}</h4>

                <Provider value={this.state.username}>
                    <B/>
                </Provider>

                {/* <B username={this.state.username} /> */}
                <hr />
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <h4>我从A接收到的的用户名是：{}</h4>
                <C/>
                <hr />
            </div>
        )
    }
}

class C extends Component {

    static contextType = MyContext

    render() {
        console.log(this);
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A接收到的的用户名是：{this.context}</h4>
                <D/>
            </div>
        )
    }
}

function D(){
    return (
        <div className='grandgrand'>
            <h3>我是D函数式组件</h3>
            <h4>我从A接收到的的用户名是：{}</h4>

            <Consumer>
                {
                    value => {
                        console.log(value);
                        return `${value}`
                    }
                }
            </Consumer>
        </div>
    )
}


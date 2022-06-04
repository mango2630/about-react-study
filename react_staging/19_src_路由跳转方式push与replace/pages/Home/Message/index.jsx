import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    
    state = {
        messageArr : [
            {id : '01', title: '消息1'},
            {id : '02', title: '消息2'},
            {id : '03', title: '消息3'}
        ]
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link replace={true} to={{
                                        pathname:'/home/message/detail',
                                        state:{
                                            id:msgObj.id,
                                            title : msgObj.title
                                        }
                                    }} >{msgObj.title}</Link>
                                    &nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 
                    state 参数无需生命接受，正常注册路由即可
                */}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}

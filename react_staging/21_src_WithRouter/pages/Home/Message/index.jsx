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

    replaceShow = (id, title)=>{
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // push跳转+携带state参数
        this.props.history.replace(`/home/message/detail`, {id:id, title:title})
    }

    pushShow = (id, title)=>{
        // push跳转+携带params参数
        // this.props.hsistory.push(`/home/message/detail/${id}/${title}`)

        // push跳转+携带search参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // push跳转+携带state参数
        this.props.history.push(`/home/message/detail`, {id:id, title:title})
    }

    back = ()=>{
        this.props.history.goBack();
    }

    forward = ()=>{
        this.props.history.goForward();
    }

    go = ()=>{
        this.props.history.go(-2)
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
                                    <Link to={{
                                        pathname:'/home/message/detail',
                                        state:{
                                            id:msgObj.id,
                                            title : msgObj.title
                                        }
                                    }} >{msgObj.title}</Link>
                                    &nbsp;&nbsp;
                                    <button onClick={()=>this.pushShow(msgObj.id, msgObj.title)} >push查看</button>
                                    <button onClick={()=>this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
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

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
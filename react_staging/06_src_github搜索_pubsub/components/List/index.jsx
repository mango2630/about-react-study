import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users: [],
        isfirst: true
    }

    // saveUers = (users) => {
    //     this.setState({
    //         // 数组对象
    //         users
    //     })
    // }

    componentDidMount(){

        // 订阅消息
        this.tolen = PubSub.subscribe('searchInfo', (msg, data) => {
            console.log(msg, data);
            // this.setState(data)
        })

        
    }

    componentWillUnmount(){
        // 取消订阅
        PubSub.unsubscribe(this.token)
    }


    render() {
        console.log(this.state.users);
        return (
            <div className="row">
            {
                this.state.users.map((userObj) => {
                    return (
                        <div className='card' key={userObj.node_id}>
                            <a rel="noreferrer" href={userObj.html_url} target="_blank" >
                                <img src={userObj.avatar_url} alt="avator" />
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>

                    )
                })
            }
            </div>
        )
    }
}

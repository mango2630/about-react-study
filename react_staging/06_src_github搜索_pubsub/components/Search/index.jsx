import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {


    search = () => {
        // 发布消息
        PubSub.publish('searchInfo', {name:'yuan', age:12})

        // 获取用户输入 [连续解构赋值+重命名]
        const {value} = this.keyWordElement
        console.log(this.keyWordElement.value, value);

        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`)
        .then(
            response => {
                console.log(response.data);
                // this.props.saveUers(response.data.items)
                PubSub.publish('searchInfo', response.data.items)

            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    
    search = ()=>{
        // 获取用户输入

        // 解构赋值的连续写法
        // const {keyWordElement:{value}} = this;
        // 连续结构赋值+重命名为keyword
        // const {keyWordElement:{value:keyword}} = this;

        const {value} = this.keyWordElement;
        console.log(this.keyWordElement);
        console.log(value);

        // 发送请求先通知app更新状态
        this.props.updateAppState({
            isFirst : false,
            isLoading : true
        })

        // 发送网络请求
        // https://api.github.com/search/user?q=xxxxxx
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`)
        .then(
            response => {
                console.log('成功了', response.data);
                // this.props.saveUsers(response.data.items);
                this.props.updateAppState({
                    isLoading : false,
                    users : response.data.items
                })

            },
            error => {
                console.log('失败了', error);
                this.props.updateAppState({
                    isLoading : false,
                    err : error.message
                    // error.message
                })
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

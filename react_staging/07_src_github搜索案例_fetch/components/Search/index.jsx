import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    
    search = ()=>{
        // 发布消息
        console.log('search组件发布消息了');
    
        const {keyWordElement:{value:keyword}} = this;
        // 发送请求前通知List更新状态
        PubSub.publish('atguigu', {isFirst:false, isLoading:true});
        
        // 发送网络请求
        //#region 
        /* axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish('atguigu',{isLoading:false, users:response.data.items})
            },
            error => {
                PubSub.publish('atguigu', {isLoading:false, err : error.message})
            }
        ) */
        //#endregion
        
        fetch(`/api1/search/users?q=${keyword}`)
        .then( // 返回值promise实例
            response => {
                console.log('联系服务器成功了');
                return response.json()
            }
        ).then(
            response => {
                console.log('获取数据成功了', response);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

        /* const response = await fetch(`/api1/search/users?q=${keyword}`)
        const data = await response.json()
        console.log(data); */
        
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

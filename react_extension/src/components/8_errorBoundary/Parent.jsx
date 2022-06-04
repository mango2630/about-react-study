import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state ={
        hasError: ''
    }

    // static getDerivedStateFromProps

    // 当Parent子组件出现错误时，会触发
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError: error}
    }

    /* 
        错误边界只适用于生产环境
    */

    componentDidCatch(){
        console.log('渲染组件出错');
    }

    render() {
        return (
            <div>
                我是parent
                {this.state.hasError ? '网络不稳定，联系管理员' : <Child/>}
                
            </div>
        )
    }
}

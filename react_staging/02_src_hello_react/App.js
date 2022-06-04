// 创建外壳组件 --- 函数 or 类

// 方法一:
// import React from 'react'
// const {Component} = React

// 方法二:
import React,{Component } from "react";

import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
// 后引入的样式覆盖之前的

// 创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}


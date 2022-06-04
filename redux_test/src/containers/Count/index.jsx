/*
    容器组件
 */



// import store from '../../redux/store'

import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

// connect 
import { connect } from 'react-redux'
// import store from '../../redux/store'



import React, { Component } from 'react'

class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const {count} = this.props
        if(count % 2 !== 0){
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        
    }
    render() {

        console.log('ui', this.props);
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+++++</button>&nbsp;
                <button onClick={this.decrement}>-----</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
    

// a 函数的返回值作为状态传递给UI组件
// <CountUI n={900} />
// 状态
const mapStateToProps = (state) => {
    return {
        count: state
    }
}
// 操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        jia: (data) => {
            // console.log(data);
            // 通知redux执行加法
            dispatch(createIncrementAction(data))
        },
        jian: data => {
            dispatch(createDecrementAction(data))
        }
    }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)



export default CountContainer;
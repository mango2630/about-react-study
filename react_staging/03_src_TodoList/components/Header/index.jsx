import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

console.log(nanoid);
export default class Header extends Component {

    // 对接受的 props 进行类型以及必要性的限制
    static propTypes = {
        addTodo : PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 判断是否是回车按键
        if(event.keyCode !== 13) return ;
        // 添加的todo名字不能为空
        if(event.target.value.trim() === ''){
            alert('输入不能为空')
            return ;
        }
        console.log(event.target.value, event.keyCode);
        // 准备好一个todo对象
        const todoObj = {
            id : nanoid(),
            name : event.target.value,
            done : false
        }
        this.props.addTodo(todoObj);

        // 清空输入
        event.target.value = ""
    }

    render() {
        console.log(this.props.a);
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称,按回车键确认" />
            </div>
        )
    }
}

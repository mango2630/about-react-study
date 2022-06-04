import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    // 表示鼠标移入 移出
    state = {mouse:false}

    handleMouse = (flag)=>{
        return ()=>{
            console.log(flag);
            this.setState({mouse:flag})
        }
    }

    // 勾选 取消勾选
    handleCheck = (id)=>{
        return (event)=>{
            console.log(id, event.target.checked);
            // 子组件操作父组件
            /* 
                App 向 list 传一个函数,
                list 传给 item
            */
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id)=>{
        console.log('通知删除', id);
        if(window.confirm('确定删除吗?')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:
                mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}

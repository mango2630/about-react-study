import React, { Component } from 'react'
import './index.css'

export default class Foorter extends Component {
    
    // 全选
    handleCheckAll = (event)=>{
        this.props.handleCheckAllTodo(event.target.checked)
    }

    clearAll = () => {
        this.props.cleatAllDone()
    }
    
    render() {

        const {todos} = this.props;

        // 已完成个数
        const doneCount = todos.reduce((pre, current)=>{return pre + (current.done ? 1 : 0)}, 0)

        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount===total && total !== 0?true:false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span>
                    / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearAll}>清楚已完成任务</button>
            </div>
        )
    }
}

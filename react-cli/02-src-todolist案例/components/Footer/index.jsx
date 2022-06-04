import React from 'react'
import './index.css'

export default function Footer(props) {
    const handleCheckAll = (event) => {
        props.checkAllTodo(event.target.checked)
    }

    const handleClearAllDone = () => {
        props.clearAllDone();
    }

    const doneCount = props.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
    }, 0)
    const total = props.todos.length;

    return (
        <div className="todo-footer">
            <label>
                <input 
                    checked={doneCount === total && total !== 0 ? true : false}
                    onChange={handleCheckAll}
                    type="checkbox" />
            </label>
            <span>
                <span>已完成{doneCount}z</span> / 全部{total}
            </span>
            <button 
                onClick={handleClearAllDone}
                className="btn btn-danger">清楚已完成任务</button>
        </div>
    )
}

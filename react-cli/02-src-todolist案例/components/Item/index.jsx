import React, { useState } from 'react'
import './index.css'

export default function Item(props) {
    const todo = props.todo;
    const [flag, setFlag] = useState(false);

    const handleMouse = (caseState) => {
        return () => {
            setFlag(caseState)
        }
    }

    const handleCheck = (id) => {
        return (event) => {
            props.updateTodo(id, event.target.checked)
        }
    }

    const handleDelete = (id) => {
        if (window.confirm("确定删除吗？")) {
            props.deleteTodo(id);
        }
    }

    return (
        <li 
            onMouseLeave={handleMouse(false)} 
            onMouseEnter={handleMouse(true)}
            style={{backgroundColor : flag ? '#ddd' : 'white'}} >
            <label>
                <input 
                    checked={todo.done}
                    onChange={handleCheck(todo.id)}
                    type="checkbox" />
                <span>{todo.name}</span>
            </label>
            <button 
                onClick={()=>{handleDelete(todo.id)}}
                style={{display : flag ? 'block' : 'none'}}
                className="btn btn-danger">删除</button>
        </li>
    )
}

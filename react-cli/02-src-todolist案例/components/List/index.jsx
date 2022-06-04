import React from 'react'
import Item from '../Item'
import './index.css'

export default function List(props) {
    const todos = props.todos;

    return (
        <ul className="todo-main">
        {
            todos.map(todo => {
                return (
                    <Item 
                        key={todo.id} 
                        deleteTodo = {props.deleteTodo}
                        updateTodo={props.updateTodo}
                        todo={todo} />
                )
            })
        }
        </ul>
    )
}

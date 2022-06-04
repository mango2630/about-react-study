import React from 'react'
import { nanoid } from 'nanoid';
import './index.css'

export default function Header(props) {

    const handleKeyUp = (event) => {
        // 判断是否为回车键
        if (event.keyCode !== 13) return ;

        // 添加的 todo 不能为空
        if (event.target.value.trim() === "") {
            alert("输入的内容不能为空");
            return ;
        }

        const todoObj = {
            id: nanoid(),
            name: event.target.value,
            done: false
        }

        props.addTodo(todoObj);

        // 清空输入
        event.target.value = "";
    }


    return (
        <div className="todo-header">
            <input 
                onKeyUp={handleKeyUp}
                type="text" 
                placeholder="请输入你的任务名称,按回车键确认" />
        </div>
    )
}

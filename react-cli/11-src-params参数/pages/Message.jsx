import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {

    const [message, setMessage] = useState([
        {id: '001', title: '消息1', content: '锄禾日当午1'},
        {id: '002', title: '消息2', content: '锄禾日当午2'},
        {id: '003', title: '消息3', content: '锄禾日当午3'},
        {id: '004', title: '消息4', content: '锄禾日当午4'}
    ])

    return (
        <div>
            <ul>
            {
                message.map( item => {
                    return (
                        <li key={item.id}>
                            <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>
                        </li>
                    )
                })
            }
            </ul>
            <hr />
            {/* 组件内容展示 */}
            <Outlet />
        </div>
    )
}

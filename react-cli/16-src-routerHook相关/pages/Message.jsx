import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

    const navigate = useNavigate();

    const [message, setMessage] = useState([
        {id: '001', title: '消息1', content: '锄禾日当午1'},
        {id: '002', title: '消息2', content: '锄禾日当午2'},
        {id: '003', title: '消息3', content: '锄禾日当午3'},
        {id: '004', title: '消息4', content: '锄禾日当午4'}
    ])

    function showDetail(item) {
        const {id, title, content} = item;
        navigate("detail", {
            replace: false,
            state: {
                id,
                title,
                content
            }
        })
    }

    return (
        <div>
            <ul>
            {
                message.map( item => {
                    return (
                        <li key={item.id}>
                            <Link to="detail"
                            state={{
                                id: item.id,
                                title: item.title,
                                content: item.content
                            }}>{item.title}</Link>
                            <button
                            onClick={()=>showDetail(item)}>编程式路由</button>
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

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {

    // 连续结构赋值
    const {state: {id, title, content}} = useLocation();
    
    /* 
    {pathname: '/home/message/detail', search: '', hash: '', state: {…}, key: 'kyd1k9iu'}
    hash: ""
    key: "kyd1k9iu"
    pathname: "/home/message/detail"
    search: ""
    state: {id: '002', title: '消息2', content: '锄禾日当午2'}
     */
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    )
}
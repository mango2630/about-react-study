import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    const [search, setSearch] = useSearchParams();
    const a = useLocation();
    /* 
    hash: ""
    key: "y5ly6xct"
    pathname: "/home/message/detail"
    search: "?id=004&title=%E6%B6%88%E6%81%AF4&content=%E9%94%84%E7%A6%BE%E6%97%A5%E5%BD%93%E5%8D%884"
    state: null
    */
    
    const id = search.get('id');
    const title = search.get("title");
    const content = search.get("content")

    return (
        <div>
            <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>点我更新接受到的参数</button>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    )
}
import React, { useState } from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'


export default function Home() {
    console.log('useOutlet', useOutlet());
    return (
        <div>
            <h3>我是Home的内容</h3>
            <ul className="nav nav-tabs">
                <li>
                <NavLink to="news">News</NavLink>
                </li>
                <li>
                <NavLink to="message">Message</NavLink>
                </li>
            </ul>
            {/* 注册路由 */}
            <Outlet />
        </div>
    )
}

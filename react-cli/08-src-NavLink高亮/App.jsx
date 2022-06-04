import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {

    function computedClassNmae({isActive}) {
        return isActive ? 'list-group-item atguigu': 'list-group-item'
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                        {/* 初次页面加载渲染的时候，会调用className */}
                        <NavLink className={computedClassNmae} to="/about">About</NavLink>
                        <NavLink className={computedClassNmae} to="/home">Home</NavLink>
                    </div>
                </div>

                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 此处展示 */}
                            {/* 注册路由 */}
                            {/* 一个匹配上，不在往下匹配 */}
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/home' element={<Home />} />
                                <Route path="/" element={<Navigate to="/about" />} />
                            </Routes>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

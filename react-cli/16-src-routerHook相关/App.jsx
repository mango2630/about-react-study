import React from 'react'
import { NavLink, useInRouterContext, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {

    const element = useRoutes(routes)
    
    const whetherRouteEnviroment = useInRouterContext();
    console.log(whetherRouteEnviroment);

    function computedClassNmae({isActive}) {
        return isActive ? 'list-group-item atguigu': 'list-group-item'
    }

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                        {/* 初次页面加载渲染的时候，会调用className */}
                        <NavLink className={computedClassNmae} to="/about">About</NavLink>
                        <NavLink className={computedClassNmae} end to="/home">Home</NavLink>
                    </div>
                </div>

                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 此处展示 */}
                            {/* 注册路由 */}
                            {/* 一个匹配上，不在往下匹配 */}
                            {element}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

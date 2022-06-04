import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <Header a={1}></Header>
                        </div>
                    </div>
                </div>
                    <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                        {/* 在React中靠路由链接实现切换组件 */}
                        <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                        <NavLink activeClassName="atguigu"  className="list-group-item" to="/home">Home</NavLink>
                        
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <Header a={1}></Header>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* 导航 */}
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about" a={1} b={2}>About</MyNavLink>
                            <MyNavLink to="/home/a/b">Home</MyNavLink>

                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* 注册路由,展示内容 */}
                                    <Route exact path="/about" component={About} />
                                    <Route exact={true} path="/home" component={Home} />
                                    
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

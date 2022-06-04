import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    
    /* 
        只有路由组件才有history
        一般组件没有history
        withRouter 可以让一般组件用于路由组件的history
    */
    back = () => {
        this.props.history.goBack();
    }
    
    forward = () => {
        this.props.history.goForward();
    }

    go = () => {
        this.props.history.go(-2);
    }

    render() {
        // console.log('header组件收到的props是', this.props);
        return (
            <div>
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>   
            </div>
        )
    }
}

/* 
    暴露withRouter的返回值
    给一般组件加工 history 等api
    withRouter的返回值是要给新组件
*/
export default withRouter(Header);

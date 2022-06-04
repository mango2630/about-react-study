import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'


ReactDOM.render(<App/>, document.getElementById('root'))

// 检测redux中的状态变化
store.subscribe( () => {
    ReactDOM.render(<App/>, document.getElementById('root'))
})
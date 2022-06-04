import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'
import {Provider} from 'react-redux'

ReactDOM.render(<App/>, document.getElementById('root'))

// 检测redux中的状态变化
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , 
    document.getElementById('root')
)          
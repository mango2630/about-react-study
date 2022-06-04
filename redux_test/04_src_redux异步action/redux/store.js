/* 
    该文件专门用于暴露一个store对象
*/

import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 暴露sotre
export default createStore(countReducer, applyMiddleware(thunk))
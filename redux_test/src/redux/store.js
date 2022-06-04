/*
    暴露store对象
 */


// 创建redux核心的 store
import { createStore } from "redux";



// 引入为count服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)



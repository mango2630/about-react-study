/* 
    该文件专门用于暴露一个store对象
*/

import {createStore} from 'redux'
import countReducer from './count_reducer'

// 暴露sotre
export default createStore(countReducer)
/* 
    该文件专门为Count组件生成action对象
*/

import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"

export const createIncrementAction = data => ({
    type:INCREMENT, data
})

export const createDecrementAction = data => ({
    type:DECREMENT, data
})

// 异步action就是指action的值为函数
export const createIncrementAsyncAciotn = (data, time) => {
    return ()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        }, time);
    }
}


// 使用方法2：
/* export const createIncrementAsyncAciotn = (data, time) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
} */


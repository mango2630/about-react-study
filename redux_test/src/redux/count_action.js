/* 
    该文件专门为count组件生成action
*/

import { INCREMENT, DECREMENT } from "./constant"

export const createIncrementAction = data => ({
    type: INCREMENT,
    data
})
export const createDecrementAction = data => ({
    type: DECREMENT,
    data
})
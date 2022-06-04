/* 
    1.创建一个为Count组件服务的 reducer, reducer本质就是一个函数
    2.reducer函数会接到两个参数：previousState, action
*/

import { DECREMENT, INCREMENT } from "./constant";

const initState = 0

export default function countReducer(previousState = initState, action){

    // if(previousState === undefined) previousState = 0;

    // console.log(previousState, action);

    const {type, data} = action;

    switch (type) {
        case INCREMENT:
            // console.log("@");
            return previousState + data;
        case DECREMENT:
            return previousState - data;
        default:
            return previousState;
    }
}
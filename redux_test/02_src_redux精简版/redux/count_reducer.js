export default function countReducer(preState, action){
    if(preState === undefined){
        preState = 0;
    }

    const {type, data} = action;

    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState + data;
        default:
            return preState;
    }

}
// 引入Count的UI组件
import CountUI from '../../components/Count'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAciotn} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// a 函数的返回的对象中的key作为状态传递给UI组件props的key value 
function mapStateToProps(state){
    return {count : state};
}

// b函数返回对象中的key就作为传递给UI组件props的key，value作为传递给UI组件props的value——操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia : number => dispatch(createIncrementAction(number)),
        jian : number => dispatch(createDecrementAction(number)),
        jiaAsync : (number, time) => dispatch(createIncrementAsyncAciotn(number, time))
    }
}


// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

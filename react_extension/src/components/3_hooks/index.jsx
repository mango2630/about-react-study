import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
/* class Demo extends React.Component {
    
    state = {count : 0}

    myRef = React.createRef();

    addNumber = ()=>{
        this.setState(state => ({count : state.count+1}))
    }
    
    // 卸载组件
    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount(){
        this.timer = setInterval( ()=>{
            this.setState(state => ({count : state.count+1}))
        }, 1000)
    }

    // 清除定时器
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    show = ()=>{
        console.log(this.myRef.current.value);
        // console.log(this.myRef.current);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <h2>当前求和为:{this.state.count}</h2>
                <button onClick={this.addNumber}>点我+1</button>

                <button onClick={this.unmount}> 卸载组件</button>
                <button onClick={this.show}> show </button>
            </div>
        )
    }
} 
 */



// 函数式组件
function Demo (){

    /* 
        a: []
        const [xxx, setXxx] = React.useState(initValue)  
        useState()说明:
            参数: 第一次初始化指定的值在内部作缓存
            返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
        setXxx()2种写法:
            setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
            setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
    */
    console.log('Demo function'); // Demo函数调用 1 + n次

    const [count, setCount] = React.useState(10);


    /* 
        useEffect => didMount + update;
        不写第二个参数，全局检测
        写第二个参数，检测数组内的变量
     */

    React.useEffect(() => {
        console.log('@');
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        /* 返回的函数相当于 willunmount */
        return () => {
            console.log('$$');
            clearInterval(timer)
        }
    }, [])


    const myRef = React.useRef();


    function add(){
        // setCount(count + 1)
        setCount(count => count + 1)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show(){
        console.log(myRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo


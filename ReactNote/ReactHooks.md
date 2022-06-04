## 安装

```shell
npx create-react-app
```



## 初始

> 发现 v18 的渲染方式改变了。

由 `ReactDOM.render()` 转变为 `createRoot()`。

```js
const root = createRoot(container);
root.render(element);
```

```js
root.unmount();
```

求和案例 `demo01`.



## 动机

- **Hook 使你在无需修改组件结构的情况下复用状态逻辑。**
- **Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）**
- Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。



## useState 介绍

```js
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```



- 用来声明状态变量。
- 通过在函数组件里调用它来给组件添加一些内部 state.
- React 会再重复渲染时保留这个 state.
- **返回值：**
  - 是一个数组，Array(2)。
  - 当前状态和一个让你更新它的函数，可以在事件处理函数中或其他一些地方调用这个函数。
- 参数：只有一个，初始 state。
- 初始 state 参数只有在第一次渲染时才会被用到。
- 类似 class 组件的 `this.setState`, 但是不会把新的 state 和旧的 state 合并。

---

- React是怎么保证这三个useState找到它自己对应的state呢？

  > React是根据`useState`出现的顺序来确定的.。
  >
  > **React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序**。



## useEffect  代替常用的生命周期函数

- 它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

- React首次渲染和之后的每次渲染都会调用一遍`useEffect`函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。
- `useEffect`中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时**异步执行**的，而`componentDidMonut`和`componentDidUpdate`中的代码都是同步执行的。个人认为这个有好处也有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果这时异步的就不好操作了。

---

- `componentWillUnmount`生命周期函数（组件将要被卸载时执行）。
- 定时器要清空，避免发生内存泄漏;比如登录状态要取消掉，避免下次进入信息出错。
- `useEffect`的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才进行解绑。
- 但是当传空数组`[]`时，就是当组件将被销毁时才进行解绑，这也就实现了`componentWillUnmount`的生命周期函数。

```js
useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)

    return ()=>{
        console.log('====================')
    }
},[])
```



## useContext

- 父子组件传值。
- 需要注意的是`useContext`和`redux`的作用是不同的，一个解决的是组件之间值传递的问题，一个是应用中统一管理状态的问题，但通过和`useReducer`的配合使用，可以实现类似`Redux`的作用。
- useContext 接收上下文变量。
- createContext 创建一个组件。

```js
import React, {createContext, useContext, useState} from "react";
const CountContext = createContext();

function CountHooks() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>you clicked {count} times!</p>
            <button onClick={()=>{setCount(count + 1)}}>clicked me</button>

            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

function Counter() {
    let count = useContext(CountContext);
    return (
        <div>我是{count}</div>
    )
}
```



## useReducer



## useMemo 

- `useMemo`主要用来解决使用React hooks产生的无用渲染的性能问题。
- 使用function的形式来声明组件，失去了`shouldCompnentUpdate`（在组件更新之前）这个生命周期，也就是说我们没有办法通过组件更新前条件来决定组件是否更新。而且在函数组件中，也不再区分`mount`和`update`两个状态，这意味着函数组件的每一次调用都会执行内部的所有逻辑，就带来了非常大的性能损耗。

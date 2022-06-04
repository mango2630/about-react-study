## 1. setState

### setState更新状态的2种写法

- setState 是一个同步方法，但是更新状态是**异步**的。

- setState(stateChange, [callback])------**对象式的setState**
  - stateChange为状态改变对象(该对象可以体现出状态的更改)
  - callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
- setState(updater, [callback])------**函数式的setState**
  - updater为返回stateChange对象的函数。
  - updater可以接收到state和props。
  - callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
- 总结：
  - 对象式的setState是函数式的setState的简写方式(语法糖)
  - 使用原则：
    - 如果新状态不依赖于原状态 ===> 使用对象方式
    - 如果新状态依赖于原状态  ===> 使用函数方式
    - 如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取。

~~~ jsx
state = {
    count: 0
}

/* 对象式setState , setState是异步更新*/
addNumber = () => {
    const {count} = this.state;
    this.setState({
        count: count + 1
    }, () => {
        console.log('callback', this.state.count);
    })
    console.log('setstate后输出', this.state.count, count);
}
~~~

~~~ jsx
addNumber = () => {
    this.setState((state, props) => {
        console.log(state, props);
        return { count: state.count + 1}
    })
}
~~~



## 2. lazyLoad

### 路由组件的lazyLoad

~~~ jsx
import React, { Component, lazy, Suspense} from 'react'

const Home = lazy(() => import('./Home'))
const Home = lazy(() => import('./About'))
~~~



## 3. Hooks

#### 1. React Hook/Hooks是什么?

- Hook是React 16.8.0版本增加的新特性/新语法
- 可以让你在【函数组件】中使用 state 以及其他的 React 特性

#### 2. 三个常用的Hook

- State Hook: `React.useState()`
- Effect Hook: `React.useEffect()`
- Ref Hook: `React.useRef()`

#### 3. State Hook

- State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
- 语法: const [xxx, setXxx] = React.useState(initValue)  
- useState()说明:
  - 参数: 第一次初始化指定的值在内部作缓存
  - 返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
- setXxx()2种写法:
  - setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
  - setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

#### 4. Effect Hook

- Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)

- React中的副作用操作:

  - 发ajax请求数据获取
  - 设置订阅 / 启动定时器
  - 手动更改真实DOM

- 语法和说明: 

  ```jsx
  useEffect(() => { 
      // 在此可以执行任何带副作用操作
      return () => { // 在组件卸载前执行
          // 在此做一些收尾工作, 比如清除定时器/取消订阅等
      }
  }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
  ```

  

- 可以把 useEffect Hook 看做如下三个函数的组合

  - `componentDidMount()`        
  - `componentDidUpdate()`    	
  - `componentWillUnmount() `

#### 5. Ref Hook

- Ref Hook可以在函数组件中【存储/查找】组件内的标签或任意其它数据
- 语法: `const refContainer = useRef()`
- 作用:保存标签对象,功能与`React.createRef()`一样



## 4. Fragment

### 使用

	import {Fragment} from 'react'
	
	<Fragment><Fragment>
	<></>

### 作用

> 可以不用必须有一个真实的DOM根标签了



## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

- 创建Context容器对象：

  `const XxxContext = React.createContext()  `

- 渲染子组时，外面包裹`xxxContext.Provider`, 通过value属性给后代组件传递数据：

  ```JS
  <xxxContext.Provider value={数据}>
      子组件
  </xxxContext.Provider>
  ```

- 后代组件读取数据：

  ```JS
  //第一种方式:仅适用于类组件 
  static contextType = xxxContext  // 声明接收context
  this.context // 读取context中的value数据
  ```
  
  ```JS
  //第二种方式: 函数组件与类组件都可以
  <xxxContext.Consumer>
  {
      value => ( 
      // value就是context中的value数据, 模板字符串要显示的内容
      )
  }
  </xxxContext.Consumer>
  ```

### 注意

在应用开发中一般不用context, 一般都用它的封装react插件.



<hr/>


## 6. 组件优化

### Component的2个问题 

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
>
> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

>  **只有当组件的state或props数据发生改变时才重新render()**

### 原因

>  Component中的`shouldComponentUpdate()`总是返回true

### 解决

- 办法1: 
  - 重写shouldComponentUpdate()方法
  - 比较新旧`state`或`props`数据, 如果有变化才返回true, 如果没有返回false
- 办法2:  
  - `import React, { PureComponent } from 'react'`
  - 使用`PureComponent`
  - `PureComponent`重写了`shouldComponentUpdate()`, 只有`state`或`props`数据有变化才返回`true`
  - 注意: 
    - 只是进行`state`和`props`数据的浅比较, 如果只是数据对象内部数据变了, 返回`false  `
    - 不要直接修改`state`数据, 而是要产生新数据,
  - 项目中一般使用`PureComponent`来优化.



<hr/>


## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

- Vue中: 
  - 使用slot技术, 也就是通过组件标签体传入结构  `<A> <B/> </A>`
- React中:
  - 使用**`children props`**: 通过组件标签体传入结构
  - 使用`render props:` 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 

~~~jsx
export default class A extends Component {
    state = {
        username: 'yuan'
    }
    render() {
        return (
            <div className="parent">
                <h2>我是A组件</h2>
                <h4>我的组件名是：{this.state.username}</h4>
                <B render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class B extends Component {
    state = {name: 'tom'}
    render() {
        console.log(this.props.children);
        return (
            <div className="child">
                <h2>我是B组件</h2>
                {this.props.children}

                {this.props.render(this.state.name)}
            </div>
        )
    }
}
~~~



<hr/>

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面

#### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

`getDerivedStateFromError`配合`componentDidCatch`

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```
~~~ jsx
import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state ={
        hasError: ''
    }

// static getDerivedStateFromProps

// 当Parent子组件出现错误时，会触发
static getDerivedStateFromError(error){
    console.log(error);
    return {hasError: error}
}

// 错误边界只适用于生产环境
render() {
    return (
        <div>
            我是parent
            {this.state.hasError ? '网络不稳定，联系管理员' : <Child/>}
        </div>
    )
}}
~~~



## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

1. props：

   - children props
   - render props

2. 消息订阅-发布：

   pubs-sub、event等等

3. 集中式管理：

   redux、dva等等、

4. conText:

   生产者-消费者模式

#### 比较好的搭配方式：
- 父子组件：props
- 兄弟组件：消息订阅-发布、集中式管理(redux)
- 祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)


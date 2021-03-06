import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
    // 状态在哪里,操作状态的方法就在哪里
    
    // 初始化状态
    state = {
        todos:[
            {id:'001', name:'吃饭', done: true},
            {id:'002', name:'睡觉', done: false},
            {id:'003', name:'学习', done: true},
            {id:'004', name:'敲代码', done: true}
        ]
    }


    addTodo = (todoObj)=>{
        // 获取原todos
        const {todos} = this.state;
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({todos:newTodos})

        // console.log('App', todoObj);
        // 将data传给List
    }
    updateTodo = (id, done)=>{
        // 获取状态中的todos
        const {todos} = this.state;
        // 遍历,找到指定项,更改属性
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, done}
            }else{
                return todo;
            }
        })
        this.setState({
            todos : newTodos
        })
    }
    deleteTodo = (id)=>{
        // 获取原状态中的todos
        const {todos} = this.state;
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id;
        })
        // 更新状态
        this.setState({
            todos : newTodos
        })
    }
    checkAllTodo = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        this.setState({todos : newTodos})
    }
    clearAllDone = ()=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({
            todos : newTodos
        })
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo">
                <Header addTodo={this.addTodo}/> 
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
            </div>
        )
    }
}

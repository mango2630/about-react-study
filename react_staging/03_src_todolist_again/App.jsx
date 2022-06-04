import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    // 状态在哪里，操作状态的方法就在哪里
    state = {
        todos:[
            {id:'001', name:'吃饭', done:true},
            {id:'002', name:'学习', done:false},
            {id:'003', name:'娱乐', done:false}
        ]
    }

    addTodo = (todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    updateTodo = (id, done) => {
        const {todos} = this.state;

        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj, done}
            else return todoObj;
        })

        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const {todos} = this.state;

        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })

        this.setState({
            todos: newTodos
        })
    }

    handleCheckAllTodo = (done) => {
        // 获取原来的todos
        const {todos} = this.state;
        // 加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj, done}
        })

        this.setState({
            todos: newTodos
        })
    }

    cleatAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo}
                    deleteTodo={this.deleteTodo} />
                    <Footer handleCheckAllTodo={this.handleCheckAllTodo} todos={todos} cleatAllDone={this.cleatAllDone} />
                </div>
            </div>
        )
    }
}

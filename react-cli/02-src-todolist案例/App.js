import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

import './App.css'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
      {id:'001', name:'吃饭', done: true},
      {id:'002', name:'睡觉', done: false},
      {id:'003', name:'学习', done: true},
      {id:'004', name:'敲代码', done: true}
  ])

  const addTodo = (todoObj) => {
    setTodos([todoObj, ...todos])
  }

  const updateTodo = (id, done) => {
      // 遍历,找到指定项,更改属性
      const newTodos = todos.map((todo)=>{
          if(todo.id === id){
              return {...todo, done}
          }else{
              return todo;
          }
      }) 
      setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    setTodos(newTodos);
  }

  const checkAllTodo = (done) => {
    const newTodos = todos.map((todoObj) => {
        return {...todoObj, done}
    })
    // 为什么页面不更新？
    // 因为我把 Item 中的 todo.done 写成了 todo.todo.
    setTodos(newTodos);
  }
  
  const clearAllDone = () => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false;
    })
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <div>
      <Header addTodo={addTodo} />
      <List 
        todos = {todos}
        deleteTodo = {deleteTodo}
        updateTodo = {updateTodo} />
      <Footer 
        clearAllDone = {clearAllDone}
        checkAllTodo = {checkAllTodo}
        todos={todos}/>
    </div>
  );
}

export default App;

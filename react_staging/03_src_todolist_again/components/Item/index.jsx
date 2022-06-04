import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    
    state = {
        mouse: false
    }

    handleMouse = (flag)=> {
        return () =>{
            console.log(flag);
            this.setState({
                mouse: flag
            })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            
            this.props.updateTodo(id, event.target.checked)
        }
    }

    deleteItem = (id) => {
        // 通知app删除
        
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }

        
    }

    render() {
        console.log('12', this.props);
        const {id, name, done} = this.props;
        return (
            <li style={{backgroundColor : this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}} onClick={()=>{this.deleteItem(id)}} >删除</button>
            </li>
            
        )
    }
}

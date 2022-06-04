import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    
    getStudentsData = ()=>{
        axios.get('http://localhost:3000/api1/students')
        .then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }

    getCarsData = ()=>{
        axios.get('http://localhost:3000/api2/cars')
        .then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentsData} >点我获取数据</button>
                <button onClick={this.getCarsData} >获取汽车的数据</button>
            </div>
        )
    }
}

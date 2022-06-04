import React from 'react'
import axios from 'axios'

export default function App() {
    const getStudentData = () => {
        axios.get('http://localhost:3000/api1/students')
        .then(
            res => { console.log(res.data); },
            error => { console.log(error); }
        )
    }

    const getCarData = () => {
        axios.get('http://localhost:5001/api2/students')
        .then(
            res => { console.log(res.data); },
            error => { console.log(error); }
        )
    }
    return (
        <div>
            <button
                onClick={getStudentData}
                >点我获取学生数据</button>
                <button
                onClick={getCarData}
                >点我获取汽车数据</button>
        </div>
    )
}

import React from 'react'
import axios from 'axios'

export default function App() {
    const getStudentData = () => {
        // 此处进行了修改
        // 服务器端口 5000
        // 客户端端口 3000
        axios.get('http://localhost:3000/students')
        .then(
            res => {
                console.log(res.data);
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <div>
            <button
                onClick={getStudentData}
                >点我获取学生数据</button>
        </div>
    )
}

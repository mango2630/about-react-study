import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Home() {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <div>Home</div>
            {sum === 2 ? <Navigate to="/about" replace={true} /> : <h3>当前sum的值是：{sum}</h3>}
            <button onClick={() => {setSum(sum + 1)}} >点我++</button>
        </div>
    )
}

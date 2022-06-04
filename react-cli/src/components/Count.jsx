import React, { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(0);
    const [content, setContent] = useState(1);

    const onContentChanged = (e) => {
        setContent(parseInt(e.target.value))
    }

    const increment = () => {
        setCount(count + content);
    }

    const decrement = () => {
        setCount(count - content)
    }

    const incrementIfOdd = () => {
        if (count % 2 !== 0) {
            increment();
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            increment();
        }, 500)
    }

    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <select onChange={onContentChanged}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> &nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>&nbsp;
        </div>
    )
}

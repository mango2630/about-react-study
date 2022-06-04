import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// ReactDOM.render(<App/>, document.getElementById('root'))

// BrowserRouter HashRouter

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root')
)


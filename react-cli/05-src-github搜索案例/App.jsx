import React from 'react'
import axios from 'axios'
import List from './components/List'
import Search from './components/Search'

export default function App() {

    return (
        <div className="container">
            <Search />
            <List />
        </div>
    )
}

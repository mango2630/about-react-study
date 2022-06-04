import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 右手 */}
                <Count store={store}/>
            </div>
        )
    }
}

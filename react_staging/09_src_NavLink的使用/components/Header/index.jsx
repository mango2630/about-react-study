import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('header组件收到的props是', this.props);
        return (
            <h2>React Router Demo</h2>
        )
    }
}

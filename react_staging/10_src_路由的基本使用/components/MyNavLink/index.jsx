import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log(this.props);
        // const {title} = this.props
        return (
            // <NavLink className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            <NavLink className="list-group-item" {...this.props}></NavLink>
        )
    }
}

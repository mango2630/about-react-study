import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        /* users: [
            {id: '001', name: 'yuan', age: 17},
            {id: '002', name: 'yuan', age: 17},
            {id: '003', name: 'yuan', age: 17}
        ] */
        users: 'abc'
    }
    render() {
        return (
            <div>
                {
                    this.state.users.map((userObj)=>{
                        return <h4 key={userObj.id}>{userObj.name}</h4>
                    })
                }
            </div>
        )
    }
}

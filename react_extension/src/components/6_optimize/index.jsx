import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state = {carName: 'benchi'}

    changeCar = ()=> {
        this.setState({
            carName: 'sdaf'
        })
    }
/* 
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        console.log(this.props, this.state);

        if(this.state.carName === nextState.carName) return false
        else return true;
    } */

    render() {
        console.log('parent');
        return (
            <div className="parent">
                <h2>parent</h2>
                <h3>my car name: {this.state.carName}</h3>
                <button onClick={this.changeCar}>换车</button>
                <Grand carName={this.state.carName}/>
            </div>
        )
    }
}

class Grand extends PureComponent {
    render() {
        console.log('child');
        return (
            <div className='grand'>
                <h2>child</h2>
                <h4>我接受到的车是 {this.props.carName}</h4>
            </div>
        )
    }
}

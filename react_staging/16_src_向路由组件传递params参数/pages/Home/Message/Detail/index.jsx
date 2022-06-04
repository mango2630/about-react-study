import React, { Component } from 'react'

const data = [
    {id:'01', content : '你好， 中国'},
    {id:'02', content : '你好， 尚硅谷'},
    {id:'03', content : '你好， 未来的自己'}
]

export default class Detail extends Component {
    
    render() {
        console.log(this.props);
        const {id, title} = this.props.match.params;
        const findResult = data.find((detailObj)=>{
            return detailObj.id === id;
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT : {findResult.content}</li>
            </ul>
        )
    }
}

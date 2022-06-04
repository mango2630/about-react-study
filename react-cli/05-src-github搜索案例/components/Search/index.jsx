import React from 'react'
import axios from 'axios';

export default function index() {

    const onButtonClick = (e) => {
        e.preventDefault();
        let value = e.target[0].value;

        axios.get(`http://localhost:3000/api1/search/users?q=${value}`)
        .then(
            response => {
                console.log('成功了', response.data);

            },
            error => {
                console.log('失败了', error);
            }
        )

    };
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <form
                    action=''
                    onSubmit={onButtonClick}>
                    <input 
                        name='content'
                        type="text" 
                        placeholder="enter the name you search"/>&nbsp;
                    <button
                        type="submit"
                        >Search</button>
                </form>
            </div>
        </section>
    )
}

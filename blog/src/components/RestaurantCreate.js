import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

export default class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            Name: null,
            Rating: null,
            email: null,

        };

    }
    create() {
        fetch("http://localhost:3000/posts", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(this.state)



        }).then((result )=> {
            result.json().then((resp) => {
                alert('restaurant is been addedd');
            });
        });
    }
    render() {
        return (
            <div>

                <NavBarMenu/>
                <h1>Create Restaurant</h1>
                <br/><br/>
                <div>
                    <input onChange={(event)=>{this.setState({Name:event.target.value})}} placeholder="Restaurant Name" /><br/><br/>
                    <input onChange={(event)=>{this.setState({Ratingl:event.target.value})}} placeholder="Restaurant Rating" /><br/><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" /><br/><br/>
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>
                </div>                                                                                                                                                                                                                                                                                                     
            </div>
        );
    };
}

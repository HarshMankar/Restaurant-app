import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

export default class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            Name:null,
            Rating:null,
            email:null,
            id:null
        };
    }
    componentDidMount(){
        fetch("http://localhost:3000/posts/"+this.props.match.params.id).then((response)=>{
            response.json().then((result)=>{
                this.setState({
                    Name:result.Name,
                    Rating:result.Rating,
                    email:result.email,
                    id:result.id


                });
            });

        });

    }
    update(){
        fetch("http://localhost:3000/posts/"+this.state.id, {
            method: "Put",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(this.state)



        }).then((result )=> {
            result.json().then((resp) => {
                alert('restaurant is been updated');
            }); 
        });
    }
    render() {
        console.warn(this.props.match.params.id);
        return (
            <div>
                <NavBarMenu/>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input onChange={(event) => { this.setState({ Name: event.target.value }); }}
                        placeholder="RestaurantName" value={this.state.Name} /><br /><br />
                    <input onChange={(event) => { this.setState({ Rating: event.target.value }); }}
                        placeholder="Restaurant Rating"  value={this.state.Rating} /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }); }}
                        placeholder="Restaurant Email"  value={this.state.email} /><br /><br />
                    <button onClick={() => { this.update(); }}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

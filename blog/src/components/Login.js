import React, { Component } from 'react';
import { button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        };
    }
    logins() {
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp);
                if (resp.length > 0) {
                    localStorage.setItem("login", JSON.stringify(resp));
                    console.warn(this.props.history.push("list"));
                }
                else {
                    alert("Please check username and password");

                }


            });
        });

    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <br/>
                <br/>
                <br/>
                <section class="fff" >
                    <input type="text" placeholder="username" name="user" onChange={(event) => this.setState({ name: event.target.value })} /><br /><br />
                    <input type="password" placeholder="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /><br /><br />
                    <button onClick={() => {
                        this.logins(

                        );
                    }}>Login</button>
                </section>

            </div>
        );
    }
}

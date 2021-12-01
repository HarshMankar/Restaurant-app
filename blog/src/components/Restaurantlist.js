import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import NavBarMenu from './NavBarMenu';
import {
    
    
    Link,
      
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
export default class Restaurantlist extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        };

    }
    componentDidMount() {
        this.getdata();
    }
    getdata(){
        fetch("http://localhost:3000/posts").then((response) => {
            response.json().then((result) => {

                this.setState({ list: result });
            });

        });
    }
    delete(id){
        fetch("http://localhost:3000/posts/"+id,{
            method: "DELETE",
            



        }).then((result )=> {
            result.json().then((resp) => {
                alert('restaurant is been Deleted');
                this.getdata();
            }); 
        });

    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurantlist</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name</th>
                                        <th>Email Id</th>
                                        <th>Rating</th>
                                        <th>operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                        
                                        <tr>
                                          <td>{item.id}</td>
                                           <td>{item.Name}</td>
                                           <td>{item.email}</td>
                                          <td>{item.Rating}</td>
                                          <td><Link to={"/Update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                          <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </span>
                                          </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>

        );
    }
}

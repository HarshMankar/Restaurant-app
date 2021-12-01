import React, { Component } from 'react';
import { Table,Form,Container } from "react-bootstrap";
import NavBarMenu from './NavBarMenu';
import {
    
    
    Link,
      
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';



export default class RestaurantSearch extends Component {
    constructor(){  
        super();
        this.state = {
            searchData: null,
            nodata: false,
            last:""
        };
    }
    search(keys){
        this.setState({last:keys});
        fetch("http://localhost:3000/posts?q="+ keys).then((data) => {
            data.json().then((resp) => {
                console.warn("resp",resp);
                if (resp.length>0) {
                    this.setState({ searchData: resp }); 
                }
                else {
                    this.setState({nodata:true,searchData:null});
    
                }
    
    
            });
        });
    
    }
    delete(id){
        fetch("http://localhost:3000/posts/"+id,{
            method: "DELETE",
            



        }).then((result )=> {
            result.json().then((resp) => {
                alert('restaurant is been Deleted');
                this.search(this.state.last);
            }); 
        });

    }   
    render() {
        return (
            <Container>
                <NavBarMenu/>
                <h1>RestaurantSearch</h1>
                
                
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search" />
                <div>
                    {
                        this.state.searchData?
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
                                    this.state.searchData.map((item) =>
                                    
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
                        : " "
                    }
                    {
                        this.state.nodata? <h2>no data found</h2> : null
                    }
 
                </div>
            </Container>
        );
    }
}

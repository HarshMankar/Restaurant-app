import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faList, faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    
    
    Link,
    NavLink
     
  } from "react-router-dom"; 
  import {Navbar,Nav} from "react-bootstrap";
export default class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">

                    <Navbar.Brand href="#home" colur="white">Restaurant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><NavLink activeStyle={{color:'MediumSeaGreen'}} to="/"> Home</NavLink></Nav.Link>
                            <Nav.Link href="#link"><NavLink activeStyle={{color:'MediumSeaGreen'}} to="/Create"><FontAwesomeIcon icon={faPlus} />  Create</NavLink> </Nav.Link>
                            <Nav.Link href="#link"><NavLink activeStyle={{color:'MediumSeaGreen'}} to="/List"><FontAwesomeIcon icon={faList} />  List</NavLink></Nav.Link>
                            <Nav.Link href="#link"><NavLink activeStyle={{color:'MediumSeaGreen'}} to="/Search"><FontAwesomeIcon icon={faSearch} />  Search</NavLink></Nav.Link>
                            {
                                localStorage.getItem("login")?
                                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Logout </Link></Nav.Link>
                                : 
                                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login </Link></Nav.Link>
                                
                            }
                           



                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

            </div>
        );
    }
}


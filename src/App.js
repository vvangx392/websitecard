import React, {Component} from "react";
import {
    Container,
    Navbar,
    NavbarBrand,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./component/Cards";
import Timer from "react-compound-timer";


function App() {
    return (
        <div className="background">
            <div className="container-fluid">
                <div className="row">
                    <Navbar bg="light" expand="lg" className="navbar w-100 navbar-dark bg-dark">
                        <Navbar.Brand>AFFINITY PLUS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto"></Nav>

                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    
<div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>


<div class="content">

</div>
                </div>
                <br></br>
                <Cards/>
            </div>
        </div>
    );
}

export default App;

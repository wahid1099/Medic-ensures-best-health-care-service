import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, Row, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import { MdLogin } from "react-icons/md";
import UseAuth from "../../Hooks/UseAuth";
const Header = () => {
    const {user,logOut}=UseAuth();
    return (
        <div className='sticky-top bg-light' >
            <Container>
            <Row className='container'>
                <Col lg={2} md={2} sm={12}>
                    <Link to='/home' className="text-decoration-none text-black"><h1 className="text-decoration-none text-black">Med<span className="text-primary ">i</span>ck</h1></Link>
                </Col>
                <Col lg={5} md={5} sm={12}>
                    <Form className="d-flex ms-5 mt-2">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-5  w-100"
                            aria-label="Search"
                        />
                        <Button variant="success" className="me-5">Search</Button>
                    </Form>
                </Col>
                <Col lg={5} md={5} sm={12} >

                    <Navbar collapseOnSelect expand="lg" >


                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets" as={Link} to='/home' className="text-black">Home</Nav.Link>
                            <Nav.Link href="#deets" className="text-black" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="#deets" className="text-black" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link href="#deets" className="text-black" as={Link} to="/contact">Contact</Nav.Link>

                            {user?.accessToken && <span className="text-primary"><strong>Hello {user.displayName } </strong> </span>  }
                            { user.accessToken ?<Nav.Link href="#deets" className="text-black" as={Link} to="/logout"><Button variant="danger" onClick={logOut}>Log Out</Button></Nav.Link> : <Nav.Link href="#deets" className="text-black" as={Link} to="/login"><Button variant="danger"><MdLogin/>LogIn</Button></Nav.Link>}




                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                </Col>

            </Row>
            </Container>

        </div>
    );
};

export default Header;
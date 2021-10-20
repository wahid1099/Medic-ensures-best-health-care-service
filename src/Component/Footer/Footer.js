import React from 'react';
import {Container, Row, Col, Nav, Form, Button} from "react-bootstrap";
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest ,FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
                    <Container>
                        <Row className='pt-4'>
                            <Col lg={4} md={3} sm={6} xs={12}>

                              <h1>Medick</h1>
                                <p className="text-start text-white-50"><small>© 2004-2021 Healthline Media UK Ltd, Brighton, UK, a Red Ventures Company. All rights reserved. MNT is the registered trade mark of Healthline Media. Any medical information published on this website is not intended as a substitute for informed medical advice and you should not take any action before consulting with a healthcare professional</small></p>
                            </Col>
                            <Col lg={2} md={2} sm={6} xs={12}>
                                <h3>Quick Link</h3>
                                <Nav className="flex-column text-decoration-none text-white">
                                    <Nav.Link className="text-white-50">Symptoms</Nav.Link>
                                    <Nav.Link className="text-white-50">Prevention</Nav.Link>
                                    <Nav.Link className="text-white-50">Our Doctors</Nav.Link>
                                    <Nav.Link className="text-white-50">About Corona</Nav.Link>

                                    <Nav.Link className="text-white-50">Protect Youself</Nav.Link>




                                </Nav>
                            </Col>
                            <Col lg={2} md={2} sm={6} xs={12}>
                                <h3>Categories</h3>
                                <Nav className="flex-column text-decoration-none text-white">
                                    <Nav.Link className="text-white-50">Medical</Nav.Link>
                                    <Nav.Link className="text-white-50">Support</Nav.Link>
                                    <Nav.Link className="text-white-50">Research</Nav.Link>
                                    <Nav.Link className="text-white-50">Documentation</Nav.Link>

                                    <Nav.Link className="text-white-50">Medical laboratory</Nav.Link>




                                </Nav>
                            </Col>

                            <Col lg={4} md={4} sm={6} xs={12}>
                                <h2 className="text-start">Subscribe to our Newsletter</h2>
                                <p className="text-white-50 text-start ">Enter your email and receive the latest news,<br/> updates and special offers from us.</p>
                                <Form>
                                    <Form.Group className="mb-3 w-75 " controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Your email adress" />
                                    </Form.Group>
                                </Form>
                                <Button variant="primary" className="w-75 float-start">Subcribe</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} md={8} xs={12}sm={12}>
                                <p className="text-start">&copy; 2021 Medick All Rights Reserved | Devloped by Abdul Wahid.</p>
                            </Col>
                            <Col lg={4} md={4} xs={12}sm={12}>
<div className="flex-row ">
   <Link> <FaFacebook className="me-2 text-decoration-none text-white"/><FaTwitter className="me-2 text-decoration-none text-white"/><FaInstagram className="me-2 text-decoration-none text-white "/><FaPinterest className="me-2 text-decoration-none text-white"/> <FaYoutube className="me-2 text-decoration-none text-white"/>
</Link></div>
                            </Col>
                        </Row>
                    </Container>
            
        </div>
    );
};

export default Footer;
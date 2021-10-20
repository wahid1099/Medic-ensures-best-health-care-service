import React from 'react';
import {Button, Col, Container, Row,Form,FormGroup} from "react-bootstrap";

const Appoiment = () => {
    return (
        <div className="pt-5 pb-5">
            <Container >
                <Row className="text-start">
                    <Col lg={6} sm={12}>
                        <h5 className="text-primary">FREE APPOINTMENT
                        </h5>
                        <h2>Make an Appointment
                        </h2>
                        <p>We believe in providing the best possible care to all our existing patients and welcomenew patients to sample.
                            .</p>
                        <p>
                            We believe in providing the best possible care to all our existing patients and welcomenew patients to sample.


                        </p>
                        <Button variant="primary">Contact Us</Button>
                    </Col>
                    <Col lg={6} sm={12}>


                        <Form >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="Name" placeholder="Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Number" />
                                </Form.Group>
                            </Row>



                            <Button variant="primary" type="submit">
                                Book Appoinment
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appoiment;
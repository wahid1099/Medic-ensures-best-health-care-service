import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Service = (props) => {
    const {id,name,img,description}=props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-start text-black-50">
                            {description.slice(0,200)}
                        </Card.Text>
                   <Link to={`/${id}`}><Button variant="primary">See details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
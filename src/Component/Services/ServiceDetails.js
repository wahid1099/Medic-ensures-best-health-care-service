import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";

const ServiceDetails = () => {
    const {serviceid}=useParams();
    const [servicedetail,setServiceDetail]=useState({});
    useEffect(()=>{
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>{
                const d=data.find(service=>service.id==serviceid)
                setServiceDetail(d);
            });
    },[serviceid])
    const {id,name,img,fee,description}=servicedetail;

    return (
        <div>
          <Container>
            <Row className="pt-5 pb-5">
                <Col lg={4} className="pt-5 mt-4 text-start">
                    <h1 className="">
                        {name}
                    </h1>
                    <p className="text-secondary float-start pt-3">{description}</p>
                    <div className="pt-2 text"><h2>Fee : ${fee}</h2></div>
                    <h6>Schedule: Mon-Fri</h6>
                    <br/>
                    <Button variant="dark">Book an Appoiment</Button>

                </Col>
                <Col lg={8} className="pt-3 ">
                    <img src={img} className="img-fluid w-75"/>
                </Col>
            </Row>
        </Container>

</div>
    );
};

export default ServiceDetails;
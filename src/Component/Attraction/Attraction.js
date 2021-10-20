import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import { FaCalendarAlt,FaFileSignature,FaShieldAlt } from "react-icons/fa";
import './attraction.css';
import imagegirl from '../../images/artactuin.jpg';
const Attraction = () => {
    return (
        <div className="attraction-bg pt-5 pb-5">
          <Container>
            <Row>
                <Col lg={6} sm={12} className="text-start mt-4">
                    <h5 className="text-primary">EXTRAORDINARY SERVICES
                    </h5>
                    <h1>Why You Should Choose<br/> Medick?.</h1>
                    <div className="mt-4">
              <div className="d-flex "><FaCalendarAlt className="icon-stye"/><h3 className="ms-3">10Year of experince</h3></div>
                        <p className="text-secondary">
                            We have the best expeirnce doctor who are serving from decades
                        </p>
                    </div>


                    <div className="mt-4">
                        <div className="d-flex "><FaFileSignature className="icon-stye"/><h3 className="ms-3">Free Consultation</h3></div>
                        <p className="text-secondary">
                            We provide free consultation foor poor and first patients
                        </p>
                    </div>


                    <div className="mt-4">
                        <div className="d-flex "><FaShieldAlt className="icon-stye"/><h3 className="ms-3">100% Guranted</h3></div>
                        <p className="text-secondary">
                            We ensure the best healthcare service in the city
                        </p>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={imagegirl} className="img-fluid"/>
                </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Attraction;
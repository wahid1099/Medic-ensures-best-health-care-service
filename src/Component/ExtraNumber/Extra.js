import React from 'react';
import { BsFillPeopleFill,BsFillLaptopFill,BsEmojiSmileFill,BsTrophyFill,BsBuilding,BsFillPersonPlusFill,BsFillPersonFill } from "react-icons/bs";
import './extra.css';
import { FaAmbulance } from "react-icons/fa";
import {Col, Row} from "react-bootstrap";
const Extra = () => {
    return (
        <div className="numbersbg text-white d-md-block d-sm-none">
            <Row >
                <Col lg={2} sm={6}>
                    <div className="ps-5">
                        <BsFillPeopleFill className="icon-stye2"/>
                        <h2>1100</h2>
                        <h6>Expert Doctors</h6>
                    </div>
                </Col>
                <Col lg={2} sm={6}>
                    <div className="ps-5">
                        <BsFillLaptopFill className="icon-stye2"/>
                        <h2>100+</h2>
                        <h6>Health Program</h6>
                    </div>
                </Col>
                <Col lg={2} sm={6}>
                    <div className="ps-5">
                        <BsEmojiSmileFill className="icon-stye2"/>
                        <h2>10k+</h2>
                        <h6>Happy Clients</h6>
                    </div>
                </Col>
                <Col lg={2} sm={6}>
                    <div className="ps-5 pe-2">
                        <BsTrophyFill className="icon-stye2"/>
                        <h2>800+</h2>
                        <h6>Success Meets</h6>
                    </div>
                </Col>
                <Col lg={2} sm={6}>
                    <div className="ps-5 pe-2">
                        <BsBuilding className="icon-stye2"/>
                        <h2>9</h2>
                        <h6>Branches</h6>
                    </div>
                </Col>
                <Col lg={2} sm={6}>
                    <div className="ps-5 pe-2">
                        <FaAmbulance className="icon-stye2"/>
                        <h2>50+</h2>
                        <h6>Ambulance</h6>
                    </div>
                </Col>
            </Row>







            
        </div>
    );
};

export default Extra;
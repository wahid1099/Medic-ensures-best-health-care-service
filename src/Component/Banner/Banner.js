import React from 'react';
import {Container} from "react-bootstrap";
import bannaer from '../../images/banner.jpg';
const Banner = () => {
    return (
        <div>
            <Container>
                <img src={bannaer} className="img-fluid"/>
            </Container>
        </div>
    );
};

export default Banner;
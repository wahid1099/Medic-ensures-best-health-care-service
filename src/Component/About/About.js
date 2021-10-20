import React from 'react';
import {Container,Row,Col} from "react-bootstrap";

const About = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <div className="text-start mt-1">
                            <h5 className="text-primary">About Us</h5>
                            <h1>Changing the way you receive healthcare.
                            </h1>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <p className="text-start">
                           Medic was incorporated on 18th September, 2005. As the eye care sector was growing rapidly in Bangladesh, a specialized hospital for the treatment of eye related diseases was much needed. It is the best eye care institute of the country and coordinates the provision of specialized ophthalmological services with emphasis on quality & affordability.

                           Medic Ltd. (BEH) first started from a rented 5 storied building at Dhanmondi Road No. 6. To meet the increasing demand for clinical services and research, BEH moved to its own new facility at Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.
                        </p>
                        <p className="text-start">Medic Ltd. (BEH) first started from a rented 5 storied building at Dhanmondi Road No. 6. To meet the increasing demand for clinical services and research, BEH moved to its own new facility at Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.</p>
                        <p className="text-start">Medic Ltd. (BEH) first started from a rented 5 storied building at Dhanmondi Road No. 6. To meet the increasing demand for clinical services and research, BEH moved to its own new facility at Shatmasjid Road, Dhamnondi, on the 10th October of the year 2012.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
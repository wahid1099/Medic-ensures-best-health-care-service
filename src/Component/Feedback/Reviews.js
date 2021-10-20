import React from 'react';
import {Row, Col, Card, Container} from "react-bootstrap";

const Reviews = () => {
    return (
        <div className="mt-5 mb-5">
            <h6 className="text-primary">HAPPY CLIENTS</h6>
            <h1>What our Clients Say</h1>
           <Container>
               <Row>
                   <Col lg={4} sm={12} md={4}>
                       <Card className=" fooditemcard p-3">
                           <Card.Img variant="top" src="https://wp.w3layouts.com/medick/wp-content/themes/paid-files/medick/assets/images/team2.jpg" className="img-fluid w-25 mx-auto "  alt="clent img"/>
                           <Card.Body>
                               <Card.Title>Alexendra Sakura</Card.Title>
                               <Card.Text>
                                   <small className="text-secondary"><p>Dr. Jhankar did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance.</p></small>

                               </Card.Text>

                           </Card.Body>
                       </Card>
                   </Col>
                   <Col lg={4} sm={12} md={4}>
                       <Card className=" fooditemcard p-3">
                           <Card.Img variant="top" src="https://wp.w3layouts.com/medick/wp-content/themes/paid-files/medick/assets/images/team3.jpg" className="img-fluid w-25 mx-auto"   alt="clent img"/>
                           <Card.Body>
                               <Card.Title>Nancy hairres</Card.Title>
                               <Card.Text>
                                   <small className="text-secondary"><p> Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. Arafat taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.</p></small>

                               </Card.Text>

                           </Card.Body>
                       </Card>
                   </Col>
                   <Col lg={4} sm={12} md={4}>
                       <Card className=" fooditemcard p-3">
                           <Card.Img variant="top" src="https://wp.w3layouts.com/medick/wp-content/themes/paid-files/medick/assets/images/team1.jpg" className="img-fluid w-25 mx-auto"  alt="clent img"/>
                           <Card.Body>
                               <Card.Title>Mr Fadric</Card.Title>
                               <Card.Text>
                                   <small className="text-secondary"><p> This practice is terrific. Dr. Wahid combines expertise and a willingness to listen and discuss. She’s also an excellent surgeon. Also, the staff is very friendly and professional. I’ve never had to wait more than a few minutes when I arrive on time for an appointment..</p></small>

                               </Card.Text>

                           </Card.Body>
                       </Card>
                   </Col>

               </Row>
           </Container>
        </div>
    );
};

export default Reviews;
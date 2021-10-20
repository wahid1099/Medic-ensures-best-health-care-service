import React from 'react';
import {Carousel} from "react-bootstrap";
import './slider.css';
const Slider = () => {
    return (
        <div className="pt-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://i.ibb.co/VBrxWxb/Nurse-measuring-patient-blood-pressure.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >Blood presure</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://i.ibb.co/XXbY839/Dentist-doing-a-dental-treatment-and-intervention-on-senior-woman-Elderly-patient-during-medical-exa.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Dental operation</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderimage mx-auto img-fluid"
                        src="https://i.ibb.co/H4cHdtb/banner2.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Urine taste</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
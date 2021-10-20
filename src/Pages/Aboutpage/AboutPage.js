import React from 'react';
import About from "../../Component/About/About";
import bgabiut from '../../images/banner5.jpg';
const AboutPage = () => {
    return (
        <div>
            <h5 className="text-secondary">About Us</h5>
            <h1>Life doesn’t get easier or more forgiving, we get stronger and more resilient.</h1>
            <img src={bgabiut} className="img-fluid"/>

            <About></About>
        </div>
    );
};

export default AboutPage;
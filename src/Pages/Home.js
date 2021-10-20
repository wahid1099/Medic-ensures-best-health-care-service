import React from 'react';
import Slider from "../Component/Slider/Slider";
import Reviews from "../Component/Feedback/Reviews";
import About from "../Component/About/About";
import Attraction from "../Component/Attraction/Attraction";
import Extra from "../Component/ExtraNumber/Extra";
import Appoiment from "../Component/Appoiment/Appoiment";
import Services from "../Component/Services/Services";
import Banner from "../Component/Banner/Banner";

const Home = () => {
    return (
        <div>

<Slider></Slider>
            <About></About>
            <Banner></Banner>

                <Extra ></Extra>


            <Services></Services>

           <Reviews></Reviews>


            <Appoiment></Appoiment>
<Attraction></Attraction>
        </div>
    );
};

export default Home;
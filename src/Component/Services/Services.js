import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import Service from "./Service";

const Services = () => {
    const[service,setServices]=useState([]);
    useEffect(()=>{
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>setServices(data));
    },[])

    return (
        <div>
            <h1>Our services</h1>
            <Row xs={2} md={3} lg={3} className="g-4 container mx-auto">
                {
                    service.slice(0,6).map(srvice=><Service
                        key={srvice.id}
                    service={srvice}>

                    </Service>)
                }

            </Row>
        </div>
    );
};

export default Services;
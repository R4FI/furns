import React from 'react';
import { Container } from 'react-bootstrap';
import about from "../../Images/Best-Furniture-Hatil.jpg";
import Header from '../Shared/Header/Header';
import './AboutUs.css';
import Feedbacks from './Feedbacks/Feedbacks';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <Container className="about">
                <h1>Here You Find Whats You Need</h1>
                <img src={about} alt="" className="w-75"/>

                    <Feedbacks></Feedbacks>
                    
            </Container>
        </div>
    );
};

export default AboutUs;
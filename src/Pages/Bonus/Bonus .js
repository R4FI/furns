import { Container } from '@mui/material';
import React from 'react';
import { Row,Col } from 'react-bootstrap';
import pic1 from "../../Images/Bonus/picz.jpg";
import pic2 from "../../Images/Bonus/piczzzz.jpg";
import './Bonus.css';
const Bonus  = () => {
    return (
        <div>
              
              <Container>
              <h2 style={{textAlign:'left'}} className="mt-5">Offers</h2>
              <hr className="w-75"/>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                <img src={pic1} alt="" className="w-100 pic1"/>
                </Col>
 
                <Col md={6}>
                <img src={pic2} alt="" className="w-100 pic1"/>
                
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Bonus ;
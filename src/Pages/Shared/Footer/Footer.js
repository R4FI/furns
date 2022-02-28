import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="foot">
           <Container>
               <Row className="d-flex">
                   <Col style={{textAlign:'left'}} md={4}>
                        <h3 className="about">About us</h3>
                        <p className="aboutp">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   </Col>

                   <Col md={4}>
                       <h3 className="about2 ms-5" style={{textAlign:'left'}}>Information</h3>
                       <ul className="list" style={{textAlign:'left'}}>
                           <li className="mt-3 ms-3">About Us</li>
                           <li className="mt-3 ms-3">Manufacture</li>
                           <li className="mt-3 ms-3">Privacy & Policy</li>
                           <li className="mt-3 ms-3">Term & Condition</li>
                           <li className="mt-3 ms-3">Contact</li>
                       </ul>
                   </Col>


                   <Col style={{textAlign:'left'}} md={4}>
                       <h3 className="about">Newalatter</h3>
                        <Form>
                        <Form.Control type="email" placeholder="Enter email" className="frm" required/>
                        <button className="btttn2">Subscirbe <FontAwesomeIcon className="ms-3" icon={faPaperPlane}/></button>
                        </Form>
                       
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Footer;
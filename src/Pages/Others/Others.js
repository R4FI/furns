import React from 'react';
import { Col,Row } from 'react-bootstrap';
import shipping from "../../Images/others/free-shipping.png"
import support from "../../Images/others/technical-support.png"
import payment from "../../Images/others/security.png"
import moneyback from "../../Images/others/money-back-guarantee.png"
import './Others.css';
const Others = () => {
    return (
        <div className="mt-5 others">
         
            <Row className="d-flex">
              <Col md={3}>
                  <div className="d-flex">
              <img 
               className="iconimg1"
                src={shipping}
                alt=""/>
                <div >
                <h5 className="ms-3 mt-3">Free Shipping</h5> 
                <p  className="ms-3">Product are free shipping</p>
                </div>
                        </div>
                      
              </Col>


              <Col md={3}>
                  <div className="d-flex">
              <img 
               className="iconimg"
                src={support}
                alt=""/>
                        <div>
                        <h5 className="ms-3 mt-3">Support 24/7</h5> 
                       <p  className="ms-3">Support 24 hours a day</p>

                        </div>
                </div>

              </Col>


              <Col md={3}>
                  <div className="d-flex">
              <img 
               className="iconimg"
                src={payment}
                alt=""/>
                <div>

                </div >
                <div>
                        <h5 className="ms-3 mt-2">Secure Payment</h5>
                        <p className="ms-4">We ensure secure payment</p>
                        </div>
                    </div>
              </Col>



              <Col md={3}>
                  <div className="d-flex "> 
              <img 
               className="iconimg"
                src={moneyback}
                alt=""/>

                <div> 
                    <h5 className="ms-3 mt-2"> 100% Moneyback</h5>
                    <p className="ms-4">Most product are free shipping.</p>
                </div>
            </div>
              </Col>
            </Row>

          

        </div>
    );
};

export default Others;
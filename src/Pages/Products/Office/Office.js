import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import'./Office.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import desk from "../../../Images/Products/Office furniture/desk.jpg"
import chair from "../../../Images/Products/Office furniture/chair.jpg"
import deskchair from "../../../Images/Products/Office furniture/deskchair.jpg"
import sofa from "../../../Images/Products/Office furniture/sofa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Office = () => {
    AOS.init();
    return (
        <div>
            <Container className="office">
            <h3 style={{ textAlign: 'left' }} className="bed">Office Furniture</h3>
            <hr className="w-75"/>
                <Row className="d-flex">   
                    <Col md={3}>   
            <Card data-aos="zoom-in" data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={desk}/>
  <Card.Body>
    <Card.Title>Office Desk</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
</Col>
{/* second card */}
            <Col md={3}>
            <Card data-aos="zoom-in"  data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2  shadowcard">
  <Card.Img variant="top" src={chair}/>
  <Card.Body>
    <Card.Title>Chair</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
</Col>
{/* third card */}

            <Col md={3}>
            <Card data-aos="zoom-in"  data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2  shadowcard">
  <Card.Img variant="top" src={deskchair}/>
  <Card.Body>
    <Card.Title>Desk & Chair</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
</Col>

{/* fourth */}
            <Col md={3}>
            <Card data-aos="zoom-in"  data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2  shadowcard">
  <Card.Img variant="top" src={sofa}/>
  <Card.Body>
    <Card.Title>Sofa</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
<Link to="/hospitalfurniture">
<button className="btttn mt-5">
 Show More <FontAwesomeIcon icon={faRightLong}/>

</button>
</Link>
        </div>
    );
};

export default Office;
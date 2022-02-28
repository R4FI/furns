import React from 'react';
import { Col, Container, Row,Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Hospital.css';
import singlebed from "../../../Images/Products/Hospital/single bed.jpg";
import surgery from "../../../Images/Products/Hospital/Surgery.jpg";
import tranquil from "../../../Images/Products/Hospital/Tranquil-102.png";
import couch from "../../../Images/Products/Hospital/couch.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Hospital = () => {
    AOS.init();
    return (
        <div className="hospital">
             <Container>
            <h3 style={{ textAlign: 'left' }} className="bed">Hospital Furniture</h3>
            <hr className="w-75"/>
                <Row className="d-flex">   
                    <Col md={3}>   
            <Card data-aos="zoom-in" data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={surgery}/>
  <Card.Body>
    <Card.Title>Patient Bed</Card.Title>
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
  <Card.Img variant="top" src={tranquil}/>
  <Card.Body>
    <Card.Title>Bed Tranquil</Card.Title>
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
  <Card.Img variant="top" src={singlebed}/>
  <Card.Body>
    <Card.Title>Surgery Bed</Card.Title>
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
  <Card.Img variant="top" src={couch}/>
  <Card.Body>
    <Card.Title>Couch</Card.Title>
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

export default Hospital;
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Bedroom.css';
import table from "../../../Images/Products/img1.jpg";
import bed from "../../../Images/Products/img2.jpg";
import bed2 from "../../../Images/Products/img3.jpg";
import mattress from "../../../Images/Products/img4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
const Bedroom = () => {
  AOS.init();
    return (
        <div>

            <Container className="products">
            <h2 className="head">Our Products</h2>
            <hr className="w-25 m-auto horizon"/>
            <h3 style={{ textAlign: 'left' }} className="bed mt-5">Bedroom Items</h3>
            <hr className="w-75"/>
                <Row className="d-flex">   
                    <Col md={3}>   
            <Card data-aos="zoom-in" data-aos-duration="3000" style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={table}/>
  <Card.Body>
    <Card.Title>Table Lamp</Card.Title>
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
  <Card.Img variant="top" src={bed}/>
  <Card.Body>
    <Card.Title>Single Bed</Card.Title>
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
  <Card.Img variant="top" src={bed2}/>
  <Card.Body>
    <Card.Title>High Class Matress</Card.Title>
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
  <Card.Img variant="top" src={mattress}/>
  <Card.Body>
    <Card.Title>Queen Size Bed</Card.Title>
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

export default Bedroom;
import React from 'react';
import { Carousel, Col, Row} from 'react-bootstrap';
import './Home.css';
import img1 from "../../Images/Banner/banner3.jpg";
import img2 from "../../Images/Banner/banner4.jpg";
import chair from "../../Images/Banner/chair1.png";
import sofa from "../../Images/Banner/sofa.png";
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Others from '../Others/Others';
import Gallery from '../Gallery/Gallery';
const Home = () => {
  AOS.init();
    return (
        <div>
          <Header></Header>
            <Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100 carouselBg"
      src={img1}
      alt="First slide"
    />
     <Carousel.Caption className="captionposition">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
            <h4 data-aos="fade-right" data-aos-duration="3000"  style={{textAlign:'left'}} className="font1">Best Seller</h4>
           <h2  data-aos="fade-right" data-aos-duration="3000"  className="font2"  style={{textAlign:'left'}}>Creative Chair</h2> 
           <p   data-aos="fade-right" data-aos-duration="3000"  className="font3" style={{textAlign:'left'}}>Exclusive furniture with afordable price</p>
          <button data-aos="zoom-in" data-aos-duration="3000" style={{float:'left'}} className="bttncolor">Shop Now</button> 

            </Col>


            <Col md={6} className="imagebanner">
            <img data-aos="fade-down" data-aos-duration="3000"
               className="w-75 ms-5"
                src={chair}
                alt="First slide"
    />
            </Col>
          </Row>
     
    </Carousel.Caption>
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselBg"
      src={img2}
      alt="First slide"
    />
     <Carousel.Caption className="captionposition2">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
            <h4 data-aos="fade-right" data-aos-duration="3000"  className="font4" style={{textAlign:'left'}} >Best Seller</h4>
           <h2  data-aos="fade-right" data-aos-duration="3000"  className="font5"  style={{textAlign:'left'}}>Creative Sofa</h2> 
           <p   data-aos="fade-right" data-aos-duration="3000"  className="font6" style={{textAlign:'left'}}>Best design and reliable</p>
          <button data-aos="zoom-in" data-aos-duration="3000"   style={{float:'left'}} className="bttncolor">Shop Now</button> 

            </Col>


            <Col md={6} className="imagebanner">
            <img data-aos="fade-down" data-aos-duration="3000"
               className="w-75 mt-5"
                src={sofa}
                alt="First slide"
    />
            </Col>
          </Row>
     
    </Carousel.Caption>
  
  </Carousel.Item>

</Carousel>
        <Others></Others>
        <Products></Products>
        <Gallery></Gallery>
        <Footer></Footer>
        </div>
    );
};

export default Home;
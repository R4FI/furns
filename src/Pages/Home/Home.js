import React from 'react';
import { Carousel} from 'react-bootstrap';
import './Home.css';
import img1 from "../../Images/Banner/slider-2-1.jpg";
import img2 from "../../Images/Banner/slider-2-2.jpg";
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const Home = () => {
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
        <h4 className="font1">New Product</h4>
      <h2>Flexible Chair</h2> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <button className="bttncolor">Shop Now</button> 
      
    </Carousel.Caption>
  
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carouselBg"
      src={img2}
      alt="First slide"
    />
    <Carousel.Caption  className="captionposition">
    <h4 className="font1">Best Seller</h4>
      <h2>Creative Sofa</h2> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <button className="bttncolor">Shop Now</button> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Products></Products>
        <Footer></Footer>
        </div>
    );
};

export default Home;
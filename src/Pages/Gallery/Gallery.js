import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from 'react-bootstrap';
import './Gallery.css';
import sofa from "../../Images/Banner/sofa.png";
import chair from "../../Images/others/chair.png";
import bed from "../../Images/others/Sleigh-Bed-PNG-HD.png";
const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        
      <div>
        <h2 className="gallery">Our Gallery</h2>
        <Slider {...settings}>
          <div>
          <Card style={{ width: '18rem' , height:'25rem'}} className="bgcard1 ms-4">
  <Card.Img variant="top" src={sofa} className="w-75 p-3 m-auto"/>
</Card>
          </div>


          <div>
          <Card  className="bgcard2" style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src={chair} className="w-100 p-3 m-auto"/>
</Card>
          </div>
          <div>
          <Card style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="bgcard3" style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src={bed} className="w-75 p-3 m-auto"/>
  
</Card>
          </div>
          <div>
          <Card style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
          </div>
          <div>
          <Card style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
          </div>
        </Slider>
      </div>
      
    );
};

export default Gallery;
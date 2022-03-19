import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OfficeFurniture.css';
const OfficeFurnitureSingle = ({offer}) => {
    const { _id, name,price, rating, image } = offer;
    return (
        <div className="col-lg-3 col-md-3 col-12">
       <Card className="officecard" style={{ width: '18rem',height:'25rem' }}>
         <Card.Img variant="top" src={image}  className="cardimg"/>
      <Card.Body>
    <Card.Title ></Card.Title>
    <Card.Text  >
       <h5 style={{textAlign:'left'}}>{name}</h5> 
       <h6 style={{textAlign:'left'}}>Price ${price}</h6>
       <p style={{textAlign:'left'}}>Rating:{rating}</p>
       
    </Card.Text>
    <Link to={`/placeorder/${_id}`}>
           <button className="bttn">Buy Now</button>
           </Link>
  </Card.Body>
</Card>
   </div>
    );
};

export default OfficeFurnitureSingle;
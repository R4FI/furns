import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import './Bedroom.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import HomeFurnitureSingle from '../../HomeFurniture/HomeFurnitureSingle';
const Bedroom = () => {
  AOS.init();
  const [home,setHome] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:7000/homefurn',)
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    return (
        <div>
          
      <Container className="products">
      <h3 style={{ textAlign: 'left' }} className="bed">Home Furniture</h3>
      <hr className="w-75"/>
      <div className="row g-4"> 
                {
                    home.slice(0,4).map(offer=>
                        <HomeFurnitureSingle
                        key={offer.id}
                        offer= {offer}
                        >
                        </HomeFurnitureSingle>
                        )
                }          
                </div>
     </Container>
<Link to="/homefurniture">
<button className="btttn mt-5">
 Show More <FontAwesomeIcon icon={faRightLong}/>

</button>
</Link>
        </div>
    );
};

export default Bedroom;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import'./Office.css';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import OfficeFurnitureSingle from '../../OfficeFurniture/OfficeFurnitureSingle';
const Office = () => {
  const [home,setHome] = useState([]);
    
  useEffect(() => {
      fetch('http://localhost:7000/officefurn',)
          .then(res => res.json())
          .then(data => setHome(data))
  }, [])
    AOS.init();
    return (
        <div>
            <Container className="office">
            <h3 style={{ textAlign: 'left' }} className="bed">Office Furniture</h3>
            <hr className="w-75"/>
            <div className="row g-4"> 
                {
                    home.slice(0,4).map(offer=>
                        <OfficeFurnitureSingle
                        key={offer.id}
                        offer= {offer}
                        >
                        </OfficeFurnitureSingle>
                        )
                }          
                </div>
</Container>
<Link to="/officefurniture">
<button className="btttn mt-5">
 Show More <FontAwesomeIcon icon={faRightLong}/>

</button>
</Link>
        </div>
    );
};

export default Office;
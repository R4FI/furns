import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Hospital.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HospitalFurnitureSongle from '../../HospitalFurniture/HospitalFurnitureSongle';
const Hospital = () => {
  const [home,setHome] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:7000/hospitalfurn',)
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    AOS.init();
    return (
        <div className="hospital">
             <Container>
            <h3 style={{ textAlign: 'left' }} className="bed">Hospital Furniture</h3>
            <hr className="w-75"/>
            <div className="row g-4"> 
                {
                    home.slice(0,4).map(offer=>
                        <HospitalFurnitureSongle
                        key={offer.id}
                        offer= {offer}
                        >
                        </HospitalFurnitureSongle>
                        )
                }          
                </div>

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
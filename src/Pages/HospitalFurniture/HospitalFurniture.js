import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import HospitalFurnitureSongle from './HospitalFurnitureSongle';

const HospitalFurniture = () => {
    const [hospital,setHospital] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/hospitalfurn',)
            .then(res => res.json())
            .then(data => setHospital(data))
    }, [])
    return (
        <div>
           <Header></Header>
           <Container>
                <div className="row g-5 offercard">
                        {
                            hospital.map(offer=>
                                
                                <HospitalFurnitureSongle
                                key={offer.id}
                                offer = {offer}
                                >
                                </HospitalFurnitureSongle>
                                )
                        }
                </div>
            </Container>
        </div>
    );
};

export default HospitalFurniture;
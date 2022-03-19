import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import OfficeFurnitureSingle from './OfficeFurnitureSingle';
const OfficeFurniture = () => {
    const [office,setOffice] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/officefurn',)
            .then(res => res.json())
            .then(data => setOffice(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row g-5 offercard">
                        {
                            office.map(offer=>
                                
                                <OfficeFurnitureSingle
                                key={offer.id}
                                offer = {offer}
                                >
                                </OfficeFurnitureSingle>
                                )
                        }
                </div>
            </Container>
            
        </div>
    );
};

export default OfficeFurniture;
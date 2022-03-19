import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import './HomeFurniture.css';
import HomeFurnitureSingle from './HomeFurnitureSingle';
const HomeFurniture = () => {
    const [home,setHome] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:7000/homefurn',)
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row g-4  offercard"> 
                {
                    home.map(offer=>
                        <HomeFurnitureSingle
                        key={offer.id}
                        offer= {offer}
                        >
                        </HomeFurnitureSingle>
                        )
                }          
                </div>
            </Container>
            
        </div>
    );
};

export default HomeFurniture;
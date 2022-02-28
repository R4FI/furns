import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Shared/Header/Header';
import './Placeorder.css';
const PlaceOrder = () => {
    const { bookingId } = useParams()
    const [buyingDetails, setBuyingDetails] = useState([]);
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        console.log(data);
        fetch ('http://localhost:7000/orders',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=> {
            if (result.insertedID){
                alert('Your order successfully added')
                reset('');
            }
        })

    };


    // load detail and img

    useEffect(() => {
        fetch(`http://localhost:7000/homefurn/${bookingId}`)
            .then(res => res.json())
            .then(data => setBuyingDetails(data));
    }, [bookingId]);


    useEffect(() => {
        fetch(`http://localhost:7000/officefurn/${bookingId}`)
            .then(res => res.json())
            .then(data => setBuyingDetails(data));
    }, [bookingId]);




    useEffect(() => {
        fetch(`http://localhost:7000/hospitalfurn/${bookingId}`)
            .then(res => res.json())
            .then(data => setBuyingDetails(data));
    }, [bookingId]);

    return (
        <div>
            <Header></Header>
           
            <Container className="orderContainer">
            <h2 className="text-center ordername">Ordered Item: {buyingDetails?.name}</h2>
            <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue=""  placeholder="Name" {...register("name")} required/>
                                    <input defaultValue="" placeholder="Email"{...register("Email")} required/>
                                    <input type="text"{...register("bookname")} required placeholder="Type Product Name" defaultValue=""/>
                                    <input placeholder="phone number" defaultValue="" required {...register("phone")}/>
                                    <input type="text" {...register("Address")} required placeholder="Address"/> 
                                    <input type="submit" value="Place Order" />
                                    
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img">
                                    <img src={buyingDetails?.image} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>You Choose: {buyingDetails?.name}</h4>
                                    <p>{buyingDetails?.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><strong>Price: {buyingDetails?.price}$</strong> only.</p>
                                        <p>Review : <strong>{buyingDetails?.rating}</strong> </p>
                                    </div>
                                  <NavLink to={"/home"}> <button className="btn btn-success px-3 py-2">Back To Products</button> </NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default PlaceOrder;
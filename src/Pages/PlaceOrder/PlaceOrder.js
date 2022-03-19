
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Placeorder.css';
const PlaceOrder = () => {
    const { bookingId } = useParams();
    const [buyingDetails, setBuyingDetails] = useState([]);
    const { register, handleSubmit,reset} = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        fetch ('http://localhost:7000/orders',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=> {
            reset();
            alert('Your order successfully added')
                    
            
        })

    };


    // load detail and img
    useEffect(() => {
        const getHome =async ()=>{
            var Home=await axios.get(`http://localhost:7000/homefurn/${bookingId}`);
            if(Home?.data)
            {
                
                setBuyingDetails(Home.data);    
            }
        }
        getHome();
        },[]);


    useEffect(() => {
        const getOffice =async ()=>{
            var Office =await axios.get(`http://localhost:7000/officefurn/${bookingId}`);
            if(Office?.data)
            {
               
                setBuyingDetails(Office.data);    
            }
        }
        getOffice();
        },[]);


    useEffect(() => {
        const getHospital =async ()=>{
            var Hospital =await axios.get(`http://localhost:7000/hospitalfurn/${bookingId}`);
            if(Hospital?.data)
            {
               
                setBuyingDetails(Hospital.data);    
            }
        }
        getHospital();
        },[]);


    

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
                                    <input defaultValue={user?.displayName}  {...register("name")} required/>
                                    <input defaultValue={user.email} placeholder="Email"{...register("email")} required/>
                                    <input type="text"{...register("bookname")} required  defaultValue={buyingDetails?.name}/>
                                    <input placeholder="phone number" defaultValue="" required {...register("phone")}/>
                                    <input  defaultValue={buyingDetails?.price} required {...register("price")}/>
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
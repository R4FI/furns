import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOut from './CheckOut';
import {loadStripe} from '@stripe/stripe-js';
import './Payment.css';
import {
  Elements
} from '@stripe/react-stripe-js';
import { Container } from 'react-bootstrap';


const stripePromise = loadStripe('pk_test_51KYs7CKJTqhSIZhtcetUelsLVOWJmgxRIZjBM0bPc56i7psHmD2WFz0qHgAKrykL3pt9YzMnXjxm4lwFs0TAfYGv00ub8IzRrK')

const Payment = () => {
    const {orders} = useParams();
    const [payment,setPayment] = useState({});
   

    useEffect(() => {
        fetch(`http://localhost:7000/orders/${orders}`)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [orders]);

    return (
        <div>
          <Container className="payment">
            <h3 style={{textAlign:'left'}}>Product Name: {payment.bookname}</h3>
            <h3 style={{textAlign:'left'}} className="mb-5">Pay: ${payment.price}</h3>
      
            {
              payment?.price && 
              <Elements stripe={stripePromise}>
              <CheckOut 
               payment={payment}
              />
               </Elements>
            }
          
             </Container>
        </div>
    );
};

export default Payment;
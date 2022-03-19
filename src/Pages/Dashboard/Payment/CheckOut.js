import React, { useEffect, useState } from 'react';
import {
  CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';
import {  Container } from 'react-bootstrap';
import './CheckOut.css';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../hooks/useAuth';

const CheckOut = ({payment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const {price,name,_id} = payment;
  const [error,setError] = useState('');
  const {user} = useAuth();
  const [success,setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  useEffect(()=>{
    fetch('http://localhost:7000/create-payment-intent',{
    method : 'POST',
    headers :{
      'content-type' : 'application/json'
    },
      body : JSON.stringify({price})
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));

  },[price]);

    const handleSubmit = async(e) =>{
      e.preventDefault();  
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
      setProcessing(true);
      // Use your card Element with other Stripe.js APIs
    const {paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
        setError(error.message);
        console.log(paymentMethod);
    }
    // payment intent
    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email : user.email,
          },
        },
      },
    );

    if(intentError){
      setError(intentError.message);
      setSuccess('');
    }

    else{
      setError('');
      setSuccess('Payment Successful')
      console.log(paymentIntent);
      setProcessing(false);
      

      // save to database
      const payment = {
        amount: paymentIntent.amount,
        transaction: paymentIntent.client_secret.slice('_secret')[0],
        created : paymentIntent.created
      }
      const url =`http://localhost:7000/orders/${_id}`;
      fetch(url, {
        method : 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(payment)
      })
        .then(res=>res.json())
        .then(data=> console.log(data))
    }

    }
    return (
      <Container>
           <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '17px',
              color: '#FFFFFF',
              '::placeholder': {
                color: '#FFFFFF',
              },
            },
            invalid: {
              color: '#FFFFFF',
            },
          },
        }}
      />
    { processing? <CircularProgress/> :
        <button className="btttn3 mt-5" type="submit" disabled={!stripe || success}>
        Pay 
      </button>
    }
    </form>
    {error && <p style={{color:'red'}}> {error}</p> }
    {success && <p style={{color:'green'}}> {success}</p>  }
    </Container>
    );
};

export default CheckOut;
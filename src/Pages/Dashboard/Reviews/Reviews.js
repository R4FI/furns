import axios from 'axios';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Review.css';
const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{ 
        axios.post('http://localhost:7000/feedbacks',data)
        .then(res=>{
                reset();
                <Alert severity="success">Thank You</Alert>
        })
    }
    return (
        <div>
            <div className="feedback">
            <h2>Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true})} placeholder="Your Name" type="text" />
      <input {...register("email") } placeholder="Your Email" type="email"/>
      <textarea {...register("feedback", {maxWidth: 50})} placeholder="Your Feedback" type="text"/>
      <input type="number" {...register("rating", { max: 5 })}/>
      <input type="submit" />
    </form>
            
        </div>
        </div>
    );
};

export default Reviews;
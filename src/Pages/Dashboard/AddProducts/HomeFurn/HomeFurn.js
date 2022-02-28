import React from 'react';
import './HomeFurns.css';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const HomeFurn = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/homefurn', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div>
             <Container className="form-container">
                <h2>Home Furniture</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { maxLength: 25 })} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="number" {...register("rating", { max: 5 })} placeholder="rating" />
                <input {...register("image")} placeholder="image url" />

                {/* <input type="submit" /> */}
                <button className="bttn" type="submit">Submit</button>
            </form>
            </Container>
        </div>
    );
};

export default HomeFurn;
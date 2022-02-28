import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdmin = e =>{
        const user = {email};
        fetch('http://localhost:7000/users/admin',{
            method: 'PUT' ,
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true);
               
            }
        })
      
        e.preventDefault();
    }
    return (
        <div>
            <h3>ADD ADMIN</h3>
            <form onSubmit={handleAdmin}>
            <TextField id="standard-basic" 
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            required
            variant="standard" /> <br/>
            <button type="submit" className="bttn mt-4">Add Admin</button>
            </form>
           { success && <Alert severity="success">Congrats! Now You're Admin</Alert>}
        </div>
    );
};

export default MakeAdmin;
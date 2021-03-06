import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Register.css';
import register from "../../../Images/User/Mobile login copy.png";
import TextField from '@mui/material/TextField';
import { NavLink, useHistory} from 'react-router-dom';
import { Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from '../../Shared/Header/Header';
const Register = () => {
    AOS.init();
    const [loginData,setloginData] = useState({});
    const {user,newUser,error} = useAuth();
    const history = useHistory();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setloginData(newLoginData);
    }
    
   
    const handleRegisterSubmit = e =>{
        if(loginData.password !== loginData.password2){
         alert('Password Missmatch');
            return;
        }
        newUser(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault();
       
    }
   

    return (
        <div>
            <Header></Header>
          <Container className="register">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={6}>
                        <img data-aos="fade-down" data-aos-duration="3000" src={register} alt="" className="w-75"/>
                        </Col>
                        <Col md={6}>
                           
                            <form className="formhandle"data-aos="zoom-in" data-aos-duration="3000" onSubmit={handleRegisterSubmit}>
                            <h2 className="text-center mb-2 headsign">Sign Up/Register</h2>
                        <TextField id="standard-basic" style={{m:1 ,width:'75%'}}
                        label="User Name" onBlur={handleOnBlur}
                        required
                        name="name"
                        variant="standard" /> <br/>

                        <TextField id="standard-basic" style={{m:1 ,width:'75%'}}
                        label="Email" onBlur={handleOnBlur}
                        type="email" required
                        name="email"
                        variant="standard" /> <br/>

                        <TextField id="standard-basic" style={{m:1 ,width:'75%'}}
                        label="Password"   onBlur={handleOnBlur}
                        type="password"   required
                        name="password"
                        variant="standard" /><br/> 

                        <TextField id="standard-basic" style={{m:1 ,width:'75%'}}
                        label="Confirm Password"   onBlur={handleOnBlur}
                        type="password"   required
                        name="password2"
                        variant="standard" />
                        <br/> 
                           <button className="signupbtn w-25 mb-4">Sign Up</button> <br/>
                           <NavLink className="link" to={"/login"}>Alreay have a Account? LogIn</NavLink>
                           </form>
                         
                            {
                            user?.email && <Alert severity="success">User Added Successfully</Alert>
                            }
                            {error &&  <Alert severity="error">{error}</Alert>}
                        </Col>
                      
                    </Row>
              
              </Container>  
        </div>
    );
};

export default Register;
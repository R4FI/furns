import React, { useState } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './LogIn.css';
import login from "../../../Images/User/register copy.png";
import TextField from '@mui/material/TextField';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../../Shared/Header/Header';
const LogIn = () => {
    const [loginData,setloginData] = useState({});
    const {loginUser,signInUsingGoogle} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setloginData(newLoginData);
    }
      // redirect
     const location = useLocation();
     const history = useHistory();
    const handleLoginSubmit = e =>{
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }

 
    const handleGoogleSignIn= () => {
        signInUsingGoogle(location,history)
            .then(result => {
              
            })
    }
    return (
        <div>
            <Header></Header>
            <Container className="login">
                <Row  className="d-flex justify-content-center align-items-center">

                    <Col md={6}>
                    <img src={login} alt="" className="w-75"/>
                    </Col>
                    

                    <Col md={6}>
                    <h2 className="text-center mb-2 headsign">Log In</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic" style={{m:1 ,width:'75%'}}
                        label="Email" required
                        type="email" onBlur={handleOnBlur}
                        name="email"
                        variant="standard" /> <br/>

                        <TextField id="standard-basic" className="mt-3" style={{m:1 ,width:'75%'}}
                        label="Password"  required
                        type="password" onBlur={handleOnBlur}
                        name="password"
                        variant="standard" /><br/> 
                        <br/> 
                           <button type="submit" className="siginbtn mb-4 w-25">Sign In</button> <br/>
                           <button onClick={handleGoogleSignIn} className="btttn mb-4" variant="warning" type="submit">
                         <FontAwesomeIcon icon={faGoogle} />   SignIn With Google
                            </button>  <br/>
                           <NavLink className="link" to={"/register"}>New User? Please Register</NavLink>
                </form>
                        </Col>
                      
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;
import {faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand as={Link} to={"/home"} className="brandnav"><span className="fcolor">F</span>urns.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link className="navcolor mt-2 ms-3" as={Link} to={"/home"}>Home</Nav.Link>
      <Nav.Link className="navcolor mt-2 ms-3" as={Link} to={"/homefurniture"}>Home Furniture</Nav.Link>
      <Nav.Link className="navcolor mt-2 ms-3" as={Link} to={"/officefurniture"}>Office Furniture</Nav.Link>
      <Nav.Link className="navcolor mt-2 ms-3" as={Link} to={"/hospitalfurniture"}>Hospital Furniture</Nav.Link>
      <Nav.Link className="navcolor mt-2 ms-3" as={Link} to={"/about"}>About Us</Nav.Link>
     
      
      
        {
          user?.email? 
            <button className="logoutbtn" onClick={logout}>Log Out</button>
                :
                <Nav.Link className="navcolor  mt-2 ms-5" as={Link} to={"/login"}><FontAwesomeIcon  icon={faUser}/> </Nav.Link>

        }     
        <Navbar.Text className="ms-3">
                            {user?.email &&
                             <Link to="/profile"><span   className="spanname ms-auto">{user?.displayName} </span> </Link> 
                            }
                            <span><img className="profile" src={user?.photoURL} alt="" /></span>

                        </Navbar.Text> 
      
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
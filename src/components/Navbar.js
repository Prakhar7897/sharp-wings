import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
  import NavDropdown from 'react-bootstrap/NavDropdown';
 


  function Navbar() {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavBtnLink to='/'>Home</NavBtnLink>
                    <NavBtnLink to='/about'>About us</NavBtnLink>
                    <NavBtnLink to='/admin'>Admin</NavBtnLink>
                    <NavBtnLink to='/user'>User</NavBtnLink>
                    <NavBtnLink to='/passenger'>Passenger</NavBtnLink>
                   
                    {/* <NavBtnLink to='/fdetails'>FlightDetails</NavBtnLink> */}
                    

                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to='/login'>Login</NavBtnLink> */}
                    <NavDropdown title="Login" id="nav-dropdown" style={{color:'white'}}>
                        <NavDropdown.Item href='login'>User Login</NavDropdown.Item>
                        <NavDropdown.Item href="adlogin">
                            Admin Login
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavBtnLink to='/register_user'>SignUp</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

 

  export default Navbar;
import "./App.css"
// import "./login.css"
// import "./register.css"
// import "./assets.jpeg/desktop-wallpaper-muhammad-ali-boxing-iphone.jpg"
import { ImUser } from "react-icons/im";
// import { ImMail3 } from "react-icons/im";
// import { FcLockPortrait } from "react-icons/fc";
import { LiaAddressBookSolid } from "react-icons/lia";
import { FcPrivacy } from "react-icons/fc";
import { BsEnvelopeFill } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { Col, Row } from 'reactstrap'
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalBodyProps, ModalHeader, modal, ModalFooter, closeBtn, className } from 'reactstrap';
import { FormGroup, Form, Input, Label, Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Nav_Bar(args, props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);



  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModaL = () => setLoginModal(loginModal)


  const toggle = () => setModal(!modal);

  

  const [UserName, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);


  const { className1 } = props;

  const [registrationmodal, setRegistrationModal] = useState(false);
  const registrationtoggle = () => setRegistrationModal(!registrationmodal);



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`http://localhost:5002/login/${email}/${password}`)
      console.log(res)
    }
    catch (err) {
      throw err
    }
  }
  
  



  

  return (
    <div className="n-comtainer">
      <Navbar color="faded" light className='fixed-top' >
        <NavbarBrand href="/" className="me-auto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wLqq0-73oloZ6gmcjphBYfNKrHKTlae6wg&usqp=CAU" style={{ height: "10vh", width: "10vh" }}></img>
        </NavbarBrand>
        <div>
          <Button style={{ marginRight: "2vh" }}
            color="primary"
            // href="#"
            // tag="a"
            onClick={toggle}
          >
            Sign-In
          </Button>
          <Modal isOpen={modal} toggle={toggle}  {...props}>
            <div className="login-h">
              LOGIN
            </div>
            <ModalBody className="login-MB"  >
              <div className="container-login">
                <div className="header-login">
                  {/* <div className="underline"></div> */}
                </div>
                <div className="inputs">
                  <div className="input">
                    < ImUser style={{ color: "red" }} /><input type="text" placeholder="Username" />
                  </div>

                  <div className="input">
                  <FcPrivacy />
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
                <div className="submit-container">
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="login-button"  >
                submit
              </Button>
              <Button className="cancel" color="secondary" onClick={toggleLoginModaL}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
      <Button color="danger" onClick={registrationtoggle}>
        Click Me
      </Button>
      <div className="registration-M">
      <Modal isOpen={registrationmodal} registrationtoggle ={registrationtoggle } className={className1}>
        <ModalHeader registrationtoggle ={registrationtoggle } >
          Modal title
        </ModalHeader>

        <ModalBody  className="register-MB">
        <div className="cantainer-register">
          <div className="inputs-Reg">
          < ImUser style={{ color: "orange" }} />
            <label className="input-reg"  htmlFor="Username">Username</label>
            <input type="text" name="Username" id="Username"  className="inputs-inter-reg"   />
          </div>
          <div>
          <BsEnvelopeFill style={{color:"orange"}}  />
            <label className="inputs-reg" htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="inputs-inter-reg"  />
          </div>
          <div>
          <FcPrivacy />
            <label  className="inputs-reg"  htmlFor="Password">Password</label>
            <input type="passsword" name="password" id="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="inputs-inter-reg"  />
          </div>
          <div>
          <FcPrivacy />
            <label className="inputs-reg"   htmlFor="confirm-Password">Comfirm Password</label>
            <input type="password" name="password" id="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="inputs-inter-reg" />
          </div>
          <div>
          <FcContacts />
            <label  className="inputs-reg"   htmlFor="Phone-Number">Phone Number</label>
            <input type="number" name="number" id="number" className="inputs-inter-reg"  />
          </div>
          <div>
          <LiaAddressBookSolid  style={{background:"orange"}}  />
            <label  className="inputs-reg"   htmlFor="Address">Address</label>
            <input type="Address" name="Address" id="Address" className="inputs-inter-reg"   />
          </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={registrationtoggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={registrationtoggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
      </Navbar>

    </div>
  );
}

export default Nav_Bar;
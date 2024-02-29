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
  Navbar, 
  NavbarBrand,
} from 'reactstrap';


function Nav_Bar( props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);



  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModaL = () => setLoginModal(loginModal)


  const toggle = () => setModal(!modal);

  

  const [formdata, setFormdata] = useState({
    username:'',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
    address: '',
  })

  const handleInput = (e) => {
    console.log('handleInput triggered')
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  console.log(formdata)

  // const { className1 } = props;

  const [registrationmodal, setRegistrationModal] = useState(false);
  const registrationtoggle = () => setRegistrationModal(!registrationmodal);




  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`http://localhost:5002/login/${formdata.email}/${formdata.password}`)
      console.log(res)
      if (res.status === 200) {
        setModal(!modal)
        alert("succefully Logged - in")
      }
    
    //   if(formdata.username === formdata.username && formdata.password === formdata.password){
    //   setModal(!modal);
    //   alert("login succesfull");
    // }else{
    //   alert('login failed');
    // }
      // setLoggedIn(true);
      // const userData = JSON.parse(res.data);
      // setUser({
      //   name: userData.name,
      //   email: userData.email,
      //   isAdmin: userData.isAdmin,
      // })
    }
    catch (err) {
      throw err
    }
  }

// <----------------------register------------------------------>



  const handleSubmitreg = async (e) => {
    e.preventDefault()
    try {
      if (formdata.password === formdata.confirmpassword) {
        let res = await axios.post('http://localhost:5002/register', formdata)
        console.log(res)
        if (res.status === 200) {
          setRegistrationModal(!registrationmodal)
          alert("registered succesfully")
        }
      } else {
        alert("Passwords are not matching, please re-check")
      }
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
              <Form onSubmit={handleSubmit}>
              <div className="container-login">
                <div className="header-login">
                  {/* <div className="underline"></div> */}
                </div>
                <div className="inputs">
                  <div className="input">
                    < ImUser style={{ color: "red" }} /><input  placeholder="username"  name="username" id="username"   value={formdata.username} onChange={handleInput}/>
                  </div>

                  <div className="input">
                  <FcPrivacy />
                    <input type="password" placeholder="Password"  name="password" id="originalpassword"    value={formdata.password} onChange={handleInput} />
                  </div>
                </div>
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
                <div className="submit-container">
                </div>
              </div>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" onClick={handleSubmit}>
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
        SIGN-UP
      </Button>
      <div className="registration-M">
      <Modal isOpen={registrationmodal} registrationtoggle ={registrationtoggle } className="props">
        <ModalHeader registrationtoggle ={registrationtoggle } >
          Modal title
        </ModalHeader>

        <ModalBody  className="register-MB">
        <Form onSubmit={handleSubmitreg}>
        <div className="cantainer-register">
          <div className="inputs-Reg">
          < ImUser style={{ color: "orange" }} />
            <label className="input-reg"  htmlFor="username">Username</label>
            <input  name="username" id="username"  className="inputs-inter-reg" value={formdata.username} placeholder="username"  onChange={handleInput}   />
          </div>
          <div>
          <BsEnvelopeFill style={{color:"orange"}}  />
            <label className="inputs-reg" htmlFor="email">Email</label>
            <input  name="email" id="email" className="inputs-inter-reg" value={formdata.email} placeholder="Email" onChange={handleInput}  />
          </div>
          <div>
          <FcPrivacy />
            <label  className="inputs-reg"  htmlFor="Password">Password</label>
            <input  name="password" id="originalpassword"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="inputs-inter-reg" value={formdata.password} placeholder="password" onChange={handleInput}  type="password"   />
          </div>
          <div>
          <FcPrivacy />
            <label className="inputs-reg"   htmlFor="confirm-Password">Comfirm Password</label>
            <input  name="confirmpassword" id="confirmdpassword"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="inputs-inter-reg" value={formdata.confirmpassword} placeholder="Confirmpassword" onChange={handleInput} />
          </div>
          <div>
          <FcContacts />
            <label  className="inputs-reg"   htmlFor="phonenumber">Phone Number</label>
            <input  name="phonenumber" id="phonenumber" className="inputs-inter-reg" value={formdata.phonenumber} onChange={handleInput}  placeholder="phonenumber"  />
          </div>
          <div>
          <LiaAddressBookSolid  style={{background:"orange"}}  />
            <label  className="inputs-reg"   htmlFor="address">Address</label>
            <input  name="address" id="address" className="inputs-inter-reg" value={formdata.address} onChange={handleInput} placeholder="Address"  />
          </div>
        </div>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleSubmitreg} >
            submit
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
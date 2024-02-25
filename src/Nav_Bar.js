import "./App.css"
import "./login.css"
import { ImUser } from "react-icons/im";
import { ImMail3 } from "react-icons/im";
import { BsFileLock2Fill } from "react-icons/bs";
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Col, Row } from 'reactstrap'
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




function MyComponent() {
  const [user, setUser] = useState({ 
    email : "vamansrir@gmail.com"
  });
  const [icon, setIcon] = useState('default-icon.png'); // Example initial icon

  // ... rest of your component logic and functions
}



  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div className="n-comtainer">
      <Navbar color="faded" light>
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
            SignIn
          </Button>
          <Modal isOpen={modal}  toggle ={toggle }  {...props}>
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
                < ImUser  style={{color:"red"}}/>
                  <input type="text"/>
                </div>
                <div className="input">
                <ImMail3  style={{color:"red"}} />
                  <input type="email"/>
                </div>
                <div className="input">
                <BsFileLock2Fill   style={{color:"red"}}/>
                  <input type="password"/>
                </div>
              </div>
              <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
              <div className="submit-container">
              </div>
              </div>
              

            </ModalBody>
            <ModalFooter>
              
              <Button  className="login-button"  >
                submit
                
              </Button>
              
              <Button  className="cancel"  color="secondary" onClick={toggleLoginModaL }>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        {/* <Button
          color="primary"
          href="#"
          tag="a"
          onClick={toggle}
        >
          SignUp
        </Button>
        <Modal isOpen={modal} fade={false} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <>

              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Email
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">
                        Password
                      </Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">
                    Address
                  </Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">
                    Address 2
                  </Label>
                  <Input
                    id="exampleAddress2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">
                        City
                      </Label>
                      <Input
                        id="exampleCity"
                        name="city"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">
                        State
                      </Label>
                      <Input
                        id="exampleState"
                        name="state"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">
                        Zip
                      </Label>
                      <Input
                        id="exampleZip"
                        name="zip"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input
                    id="exampleCheck"
                    name="check"
                    type="checkbox"
                  />
                  <Label
                    check
                    for="exampleCheck"
                  >
                    Check me out
                  </Label>
                </FormGroup>
                <Button>
                  Sign in
                </Button>
              </Form>
            </>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
        <></>
        {/* </Nav>
        </Collapse> */}
      </Navbar>

    </div>
  );
}

export default Nav_Bar;
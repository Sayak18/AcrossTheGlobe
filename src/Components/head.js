import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Navbar, Nav, Form, Container, FormControl } from "react-bootstrap";
import "../styles/head.css";
import btn from "../images/Vector.png";
import logo from "../images/Union 1.png";
export default function HeadBar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // return (
  //   <div className="head">
  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Create Account</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <form>
  //           <input type="text" placeholder="First Name" name="firstName" />
  //           <input type="text" placeholder="Last Name" name="lastName" />
  //           <input type="email" placeholder="Email" name="email" />
  //         </form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Create account
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //     <div className="logo">
  //       <span className="green">ATG.</span>
  //       <span className="black">
  //         W<img className="head-logo" src={logo} />
  //         RLD
  //       </span>
  //     </div>
  //     <div className="search">
  //       <input
  //         type="search"
  //         placeholder="Search for your favorite groups in ATG"
  //       />
  //     </div>
  //     <div className="right">
  //       <span>Create account.</span>
  //       <span className="blue">It's free!</span>
  //       <button className="head-btn" onClick={handleShow}>
  //         <img src={btn} />
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <Navbar bg="light" expand="lg">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email" name="email" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create account
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        <Navbar.Brand href="#">
          <span className="green">ATG.</span>
          <span className="black">
            W<img className="head-logo" src={logo} />
            RLD
          </span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          > */}
        {/* <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link> */}
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
        {/* </Nav> */}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for your favorite groups in ATG"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <button className="head-btn" onClick={handleShow}>
          <img src={btn} />
          Create account.It's free!
        </button>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

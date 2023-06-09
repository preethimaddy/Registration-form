import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
function Navigationbar() {
  return (
   <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
     <Navbar.Brand href="#home">TRAVAGO |</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link href="#gallery">Gallery |</Nav.Link>
         <Nav.Link href="#cancel Event ">Cancel Event |</Nav.Link>
         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
       <Nav>
         <Nav.Link href="#deets">Signin |</Nav.Link>
         <Nav.Link eventKey={2} href="#memes">
         Report Issue
         </Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 {/* <div class="d-flex p-2">
 <marquee style={{ color: 'red', fontSize: '2em' }}>"Online Event Registration Toll Free Number: 08066006572 / 9513948001."</marquee>
 </div>*/}
 </> 
  )
}

export default Navigationbar
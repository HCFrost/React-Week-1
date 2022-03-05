import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default class MyNavbar extends React.Component{
    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand href="#home">React App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-secondary'/>
                                <Navbar.Collapse id="responsive-navbar-nav" >
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#features" className="ms-auto">Home</Nav.Link>
                                        <Nav.Link href="#pricing" className="ms-auto">About</Nav.Link>
                                        <Nav.Link href="#pricing" className="ms-auto">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
    
  

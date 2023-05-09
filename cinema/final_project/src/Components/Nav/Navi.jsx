import Container from "react-bootstrap/Container";
import './Nav.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <Navbar variant='dark' id="navbar">
      <Container id="cont">
        <Link id='nav' to='/'>
          <Navbar.Brand href='#home' id="navsect"><strong>QA Cinema</strong></Navbar.Brand>
        </Link>
        <Nav className='me-auto' id="navsect">
          <Link id='nav' to='/'>
           <strong>Home</strong> 
          </Link>
          <Link id='nav' to='/listings'>
           <strong>Listings</strong>
          </Link>
          <Link id='nav' to='/discussion'>
            <strong>Discussion</strong>
          </Link>
          <Link id='nav' to='/findus'>
            <strong>Find us</strong>
          </Link>
          <Link id='nav' to='/about'>
           <strong>About</strong>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;

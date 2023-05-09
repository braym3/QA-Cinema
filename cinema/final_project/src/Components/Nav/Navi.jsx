import Container from "react-bootstrap/Container";
import './Nav.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <Navbar className="color-nav" variant='dark' >
      <Container className="color-nav">
        <Link id='nav' to='/'>
          <Navbar.Brand href='#home' id="color-nav">QA Cinema</Navbar.Brand>
        </Link>
        <Nav className='me-auto' id="color-nav">
          <Link id='nav' className="color-nav" to='/'>
            Home
          </Link>
          <Link id='nav' to='/listings'>
            Listings
          </Link>
          <Link id='nav' to='/discussion'>
            Discussion
          </Link>
          <Link id='nav' to='/findus'>
            Find us
          </Link>
          <Link id='nav' to='/about'>
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;

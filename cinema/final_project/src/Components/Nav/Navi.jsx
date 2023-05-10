// import Container from "react-bootstrap/Container";
import "./Nav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <Navbar id='color-nav' variant='dark' sticky='top'>
      <Link id='nav' to='/'>
        <Navbar.Brand href='#home'>QA Cinema</Navbar.Brand>
      </Link>
      <Nav className='me-auto' id='color-nav'>
        <Link id='nav' className='color-nav' to='/'>
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
    </Navbar>
  );
};

export default Navi;

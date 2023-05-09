import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Link id='nav' to='/'>
          <Navbar.Brand href='#home'>QA Cinema</Navbar.Brand>
        </Link>
        <Nav className='me-auto'>
          <Link id='nav' to='/'>
            Home
          </Link>
          <Link id='nav' to='/listings'>
            Listings
          </Link>
          <Link id='nav' to='/discussion'>
            Discussion
          </Link>
          <Link id='nav' to='/info'>
            Info
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;

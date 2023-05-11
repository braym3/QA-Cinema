import "./Nav.css";
import {Nav, Navbar, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./SearchBar/Search";

const Navi = () => {
  return (
    <Navbar id='color-nav' variant='dark' sticky='top'>
      <Link id='nav' to='/'>
        <Navbar.Brand id='brand' href='#home'>QA Cinema</Navbar.Brand>
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
        <Link id='nav' to='/contact'>
          Contact
        </Link>
        <Form id='nav' className="d-flex search-bar" style={{float: "right"}}>
            <Search/>
        </Form>
      </Nav>
    </Navbar>
  );
};

export default Navi;

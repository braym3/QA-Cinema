import "./Nav.css";
import {Nav, Navbar, Form, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./SearchBar/Search";

const Navi = () => {
	return (
		<Navbar id='color-nav' expand="lg" variant='dark' sticky='top'>
		<Container>
			<Navbar.Brand href="/" id="">QA Cinema</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto" id=''>
					<Nav.Link href="/" id='n-link'>Home</Nav.Link>
					<Nav.Link href="/listings" id='n-link'>Listings</Nav.Link>
					<Nav.Link href="/discussion" id='n-link'>Discussion</Nav.Link>
					<NavDropdown title="Info" id="basic-nav-dropdown n-link">
						<NavDropdown.Item href="/findus">Getting Here</NavDropdown.Item>
						<NavDropdown.Item href="/findus/places-to-go">Places To Go</NavDropdown.Item>
						<NavDropdown.Item href="/findus/opening-times">Opening Times</NavDropdown.Item>
						<NavDropdown.Item href="/findus/screens">Screens</NavDropdown.Item>
						<NavDropdown.Item href="/findus/classifications">Classifications</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about" id='n-link'>About Us</Nav.Link>
					<Form id='n-link' className="d-flex ml-auto">
						<Search/>
					</Form>
				</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
	);
};

export default Navi;

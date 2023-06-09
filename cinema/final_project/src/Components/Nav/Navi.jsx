import "./Nav.css";
import { Nav, Navbar, Form, Container, NavDropdown } from "react-bootstrap";
import Search from "./SearchBar/Search";

const Navi = () => {
	return (
		<Navbar id='color-nav' expand="lg" variant='dark' sticky='top'>
		<Container>
			<Navbar.Brand href="/" id=""><img src="https://i.ibb.co/cNTLzHQ/white-logo.png" height={'30px'}/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto" id=''>
					<Nav.Link href="/" id='n-link'>Home</Nav.Link>
					<Nav.Link href="/listings" id='n-link' className="listings-nav-link">Listings</Nav.Link>
					<Nav.Link href="/discussion" id='n-link' className="discussion-nav-link">Discussion</Nav.Link>
					<NavDropdown title="Info" id="basic-nav-dropdown n-link" className="info-nav-link">
						<NavDropdown.Item href="/findus" id="getting-here-nav-link">Getting Here</NavDropdown.Item>
						<NavDropdown.Item href="/findus/places-to-go" id="places-nav-link">Places To Go</NavDropdown.Item>
						<NavDropdown.Item href="/findus/opening-times" id="times-nav-link">Opening Times</NavDropdown.Item>
						<NavDropdown.Item href="/findus/screens" id="screens-nav-link">Screens</NavDropdown.Item>
						<NavDropdown.Item href="/findus/classifications" id="classifications-nav-link">Classifications</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about" id='n-link' className="about-nav-link">About Us</Nav.Link>
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

import "./Nav.css";
import {Nav, Navbar, Form, Container, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./SearchBar/Search";

const Navi = () => {
	return (
		// <Navbar id='color-nav' variant='dark' sticky='top'>
		// 	<Link id='nav' to='/'>
		// 		<Navbar.Brand id='brand' href='#home'>QA Cinema</Navbar.Brand>
		// 	</Link>
		// 	<Nav className='me-auto' id='color-nav'>
		// 		<Link id='nav' className='color-nav' to='/'>
		// 			Home
		// 		</Link>
		// 		<Link id='nav' to='/listings'>
		// 			Listings
		// 		</Link>
		// 		<Link id='nav' to='/discussion'>
		// 			Discussion
		// 		</Link>
		// 		<Link id='nav' to='/findus'>
		// 			Find us
		// 		</Link>
		// 		<Link id='nav' to='/about'>
		// 			About
		// 		</Link>
		// 		<Link id='nav' to='/contact'>
		// 			Contact
		// 		</Link>
		// 		<Form id='nav' className="d-flex search-bar" style={{float: "right"}}>
		// 				<Search/>
		// 		</Form>
		// 	</Nav>
		// </Navbar>

		<Navbar id='color-nav' expand="lg" variant='dark' sticky='top'>
		<Container>
			<Navbar.Brand href="/" id="">QA Cinema</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto" id=''>
					<Nav.Link href="/" id=''>Home</Nav.Link>
					<Nav.Link href="/listings" id=''>Listings</Nav.Link>
					<Nav.Link href="/listings" id=''>Discussion</Nav.Link>
					<NavDropdown title="Info" id="basic-nav-dropdown">
						<NavDropdown.Item href="/findus">Getting Here</NavDropdown.Item>
						<NavDropdown.Item href="/findus/places-to-go">Places To Go</NavDropdown.Item>
						<NavDropdown.Item href="/findus/opening-times">Opening Times</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about" id=''>About Us</Nav.Link>
					<Form id='' className="d-flex ml-auto">
						<Search/>
					</Form>
				</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
	);
};

export default Navi;

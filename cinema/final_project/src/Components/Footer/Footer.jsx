import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return(
        <>
            <Container>
                <footer className='py-3 footer'>
                    <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link px-2 text-muted'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/about' className='nav-link px-2 text-muted'>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/contact' className='nav-link px-2 text-muted'>Contact</a>
                        </li>
                    </ul>
                    <p className='text-center text-muted'>QACinema 2023</p>
                </footer>
            </Container>
        </>
    );
}

export default Footer;
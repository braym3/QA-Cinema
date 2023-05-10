import React from 'react';
import { Row, Col, Container } from "react-bootstrap"
import './FindUs.css';

const GettingHere = () => {
    return (
        <>
            <Col>
                <h1 className="header">Getting Here</h1>
                <p>ewofeivurevrui</p>    
                
                <h3>Directions</h3>
                <p>Lorem ipsum dolor sit amet...</p>
            </Col>
            <Col xs={3}>
                <div className='cinema-image'>
                    <img 
                    src='https://images.squarespace-cdn.com/content/v1/5f7f29171881a026d6b17bd4/1612349670884-GM80HTIKDKDGUHHYGIO4/outside+exterior+theatre+art+deco.jpg' 
                    width='40%'
                    alt='Cinema Exterior'
                    />
                </div>
            </Col>

        </>
    );
}
 
export default GettingHere;
import React from 'react';
import { Row, Col, Container, Accordion } from "react-bootstrap"
import './GettingHere.css';

const GettingHere = () => {

    const displayAccordion = () => {
        return(
            <Accordion className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                        <p className='getting-here-text'>
                        QACinema is located on the first floor of the Manchester Quayside MCUK on Salford Quarys, 
                        with lift and escalators from the ground floor and car park. 
                        The venue has a large multi story car park with four hours of free parking on receipt of a validated ticket.
                        </p>
                        <p className='getting-here-text'>
                        There's accessible parking in the centre for blue badge holders, and a drop-off area available at the front.
                        </p>
                        <p className='getting-here-text'>
                        The Harbour City tram stop is a seven minute walk away and buses stop outside the shopping centre.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Directions</Accordion.Header>
                    <Accordion.Body>
                        <p className='getting-here-text'>
                        Located in Manchester Quayside MCUK on Salford Quays,
                        QACinema is easily accessible from the M60 J12 for the M602
                         – simply follow the signs for the outlet mall.
                        </p>
                        <p className='getting-here-text'>
                        Or, you can come off the M60 at J7 and travel on the A56 to Salford Quays, following signs for the Outlet Mall.
                        </p>
                        <p className='getting-here-text'>
                        The venue has a large car park attached to the shopping centre. 
                        Please validate your car parking ticket at the cinema when you purchase or collect your tickets. 
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accessibility</Accordion.Header>
                    <Accordion.Body>
                        <p className='getting-here-text'>
                        QACinema is dedicated to giving each and every one of our guests an exceptional big screen experience. 
                        Below, you'll find accessibility information for our QACinema venue, including details on accessible and autism-friendly screenings. 
                        We welcome assistance dogs into our venue.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        );
    };


    return (
        <>
            <div className='getting-here-content'>
                <Row className='info-row'>
                    <Col>
                        <Row>
                            <h1 className="getting-here-header">Getting Here</h1>
                        </Row>
                        <Row>
                            {displayAccordion()}
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <div className='cinema-image'>
                            <img 
                            src='https://images.squarespace-cdn.com/content/v1/5f7f29171881a026d6b17bd4/1612349670884-GM80HTIKDKDGUHHYGIO4/outside+exterior+theatre+art+deco.jpg' 
                            width='100%'
                            alt='Cinema Exterior'
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Container className='google-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.456294631605!2d-2.2407172243812643!3d53.478176464852766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bff8a01245%3A0xa47537718ea8c2f3!2sManchester%20One%2C%2053%20Portland%20St%2C%20Manchester%20M1%203LD!5e0!3m2!1sen!2suk!4v1683716598840!5m2!1sen!2suk" width="895" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Container>
                </Row>
                
            </div>
            

        </>
    );
}
 
export default GettingHere;
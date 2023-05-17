import React from 'react';
import { Row, Col, Container, Accordion } from "react-bootstrap"
import './GettingHere.css';
import gettingThereDetails from './getting-there.json'

const GettingHere = () => {

    const displayAccordion = () => {
        return(
            <Accordion className='accordion' style={{marginTop:''}}>
                {gettingThereDetails.map((section) => (
                    <Accordion.Item key={section.id} eventKey={`${section.id}`}>
                        <Accordion.Header style={{padding:'15px'}}>{section.title}</Accordion.Header>
                        <Accordion.Body>
                            {section.text.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
                }
            </Accordion>
        );
    };


    return (
        <>
            <div className='getting-here-content'>
                <Row className='getting-here-header'>
                    <h1 style={{marginBottom: '3%'}} id='getting-here-title'>Getting Here</h1>
                    <p>Located in Manchester Quayside MCUK on Salford Quays,
                    QACinema is easily accessible from the M60 J12 for the M602
                    – simply follow the signs for the outlet mall.</p>
                    <p>Or, you can come off the M60 at J7 and travel on the A56 to Salford Quays, following signs for the Outlet Mall.</p>
                    <p style={{marginTop: '2%', color:'#e67700'}}><i>Address: 53 Portland St, Manchester M1 3LD</i></p>
                </Row>
                <Row className='info-row'>
                    <Col>
                        <Row>
                            {displayAccordion()}
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <div className='cinema-image'>
                            <img 
                            src='https://images.squarespace-cdn.com/content/v1/5f7f29171881a026d6b17bd4/1612349670884-GM80HTIKDKDGUHHYGIO4/outside+exterior+theatre+art+deco.jpg' 
                            style={{width: '350px', height: '250px'}}
                            alt='Cinema Exterior'
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Container className='google-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.456294631605!2d-2.2407172243812643!3d53.478176464852766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bff8a01245%3A0xa47537718ea8c2f3!2sManchester%20One%2C%2053%20Portland%20St%2C%20Manchester%20M1%203LD!5e0!3m2!1sen!2suk!4v1683716598840!5m2!1sen!2suk" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width: '100%', border:0}}></iframe>
                    </Container>
                </Row>
                
            </div>
            

        </>
    );
};
 
export default GettingHere;
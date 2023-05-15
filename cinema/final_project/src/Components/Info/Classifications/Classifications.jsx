import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Alert, Button } from "react-bootstrap"
import './Classifications.css';
import { getClassifications } from '../../../Services/classificationsService';

const Classifications = () => {
    const [classificationData, setClassificationData] = useState([]);

    useEffect(() => {
        getClassifications().then((classifications) => {
            setClassificationData(classifications);
        });
    }, []);

    const displayClassification = () => {
        return(
            classificationData.map(classification => 
                <Container className='info-panel' key={classification._id}>
                    <Alert variant='secondary'>
                        <Row>
                            <Col>
                            <img src={classification.image} alt={`${classification.name} icon`} className='classification-icon'/>
                            </Col>
                            <Col xs={9}>
                            <h4 className='classification-name'><b>{classification.name}</b> - <i>{classification.fullName}</i></h4>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{marginTop:'5%'}}><b>{classification.description}</b></p>
                            <p>{classification.rules}</p>
                        </Row>
                        
                    </Alert>
                </Container>
            )
        );
    };

    return (
        <>
            <div className='classifications-content'>
                <Row className='classifications-header'>
                    <h1 style={{marginBottom: '3%'}}>Film Classifications</h1>
                    <p>Classification is the process of giving age ratings and content advice to films and other audiovisual content to help children and families choose what’s right for them and avoid what’s not.</p>
                </Row>
                <Row className='classifications-info'>
                    <h4 className='class-info-subheading'>What are the standard film classifications?</h4>
                    <div className='class-info-section'>
                        {displayClassification()}
                    </div>
                </Row>
                <Button size='md' className='mx-3 rounded btn-orange' href='https://www.bbfc.co.uk/about-classification'>Learn More</Button>
            </div>
        </>
    );
};
 
export default Classifications;
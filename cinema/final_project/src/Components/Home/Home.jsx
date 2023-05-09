import React, { useState } from 'react';
import { Button, Row, Col, Container, Carousel, ButtonGroup } from "react-bootstrap"
import './Home.css';
import images from './images.json';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const displayCarousel = () => {
        return (
            <div>
                <Row>
                    <div className='new-releases d-flex justify-content-center'>
                        <h1 className='release-title'>New Releases</h1>
                    </div>
                </Row>
                
                <Row>
                    <div className='carousel d-flex justify-content-center'>
                        <Carousel activeIndex={index} onSelect={handleSelect}>

                            {
                                images.map(image => 
                                    <Carousel.Item key={image.id}>
                                        <img
                                        className="d-block w-100"
                                        src={image.src}
                                        alt={image.altText}
                                        />
                                        <Carousel.Caption>
                                            <h3>{image.title}</h3>
                                            <p>{image.caption}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            }
                        </Carousel>
                    </div>
                </Row>
            </div>
        );
    }

    return (
        <div>
            <Container className='home custom-border'>
                {displayCarousel()}
            </Container>
            
            <Container>
                <Row>
                    <div className='link-buttons'>
                        <ButtonGroup className='w-100'>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='#'>All Listings</Button>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='#'>Discussion</Button>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='#'>Screens</Button>
                        </ButtonGroup>
                    </div>
                </Row>
            </Container>
            
        </div>
    );
}
 
export default Home;
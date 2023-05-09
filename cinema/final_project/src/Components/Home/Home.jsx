import React, { useState } from 'react';
import { Button, Row, Col, Container, Carousel, ButtonGroup } from "react-bootstrap"
import './Home.css';

const Home = () => {
    const [index, setIndex] = useState(0);

    const images = [
        {
          src: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg', 
          altText: 'Captain Marvel poster',
          title: 'Captain Marvel',
          caption: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
        }, 
        {
            src: 'https://wallpapersmug.com/download/1600x900/b41742/thanos-and-the-black-order.jpg', 
            altText: 'Avengers: Infinity War poster',
            title: 'Avengers: Infinity War',
            caption: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
        },
        {
            src: 'https://mmo.aiircdn.com/265/5f33f643c1ef1.jpg', 
            altText: 'Tenet poster',
            title: 'Tenet',
            caption: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
        }
    ]


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
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={images[0].src}
                                alt={images[0].altText}
                                />
                                <Carousel.Caption>
                                <h3>{images[0].title}</h3>
                                <p>{images[0].caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={images[1].src}
                                alt={images[1].altText}
                                />

                                <Carousel.Caption>
                                <h3>{images[1].title}</h3>
                                <p>{images[1].caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={images[2].src}
                                alt={images[2].altText}
                                />

                                <Carousel.Caption>
                                <h3>{images[2].title}</h3>
                                <p>{images[2].caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Row>
            </div>
        );
    }

    return (
        <div>
            <Container className='home border border-warning border-2 rounded'>
                {displayCarousel()}
            </Container>
            
            <Container>
                <Row>
                    <div className='link-buttons'>
                        <ButtonGroup className='w-100'>
                            <Button variant="warning" size='lg' className='mx-3 rounded' href='#'>All Listings</Button>
                            <Button variant="warning" size='lg' className='mx-3 rounded' href='#'>Discussion</Button>
                            <Button variant="warning" size='lg' className='mx-3 rounded' href='#'>Screens</Button>
                        </ButtonGroup>
                    </div>
                </Row>
            </Container>
            
        </div>
    );
}
 
export default Home;
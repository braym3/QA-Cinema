import React, { useState, useEffect } from 'react';
import { Button, Row, Container, Carousel, ButtonGroup } from "react-bootstrap"
import './Home.css';
import { getNewReleases } from '../../Services/newReleasesService';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [newReleaseData, setNewReleaseData] = useState([]);

    useEffect(() => {
        getNewReleases().then((newReleases) => {
            setNewReleaseData(newReleases);
        });
    }, []);

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
                                newReleaseData.map(image => 
                                    <Carousel.Item key={image._id}>
                                        <div className='new-release-image'>
                                            <img
                                            src={image.src}
                                            alt={image.altText}
                                            className='nr-img'
                                            />
                                        </div>
                                        <div className='new-release-text'>
                                            <Carousel.Caption style={{paddingTop: '5%'}}>
                                                <h3>{image.title}</h3>
                                                <p>{image.caption}</p>
                                            </Carousel.Caption>
                                        </div>
                                        
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
            <Container className='home-welcome '>
                <div className='text-center'>
                    <Row>
                        <h1 className='welcome-title '>Welcome to QA Cinemas</h1>
                    </Row>
                    <Row>
                        <h5><i>Experience cinema redefined with QA Cinemas - big screens, deluxe options</i></h5>
                        <p>See the latest films, listings, times, at QA Cinemas. Browse cinema listings, book tickets, and discuss your favourites.</p>
                    </Row>
                </div>
                
            </Container>

            <Container className='home custom-border'>
                {displayCarousel()}
            </Container>
            
            <Container>
                <Row>
                    <div className='link-buttons'>
                        <ButtonGroup className='w-100'>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='/listings'>All Listings</Button>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='/discussion'>Discussion</Button>
                            <Button size='lg' className='mx-3 rounded btn-orange' href='/findus/screens'>Screens</Button>
                        </ButtonGroup>
                    </div>
                </Row>
            </Container>
            
        </div>
    );
}
 
export default Home;
import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../Screens/Screens.css';
import { getScreens } from '../../Services/screensService';

const Screens = () => {
    const [screenData, setScreenData] = useState([]);

    useEffect(() => {
        getScreens().then((screens) => {
            setScreenData(screens);
        });
    }, []);

    const displayScreenInfo = () => {
        return(
            screenData.map(screen =>
                <Container key={screen._id}>

                <h2 id="s-t">{screen.name}</h2>
                <Row>
                    <img src={screen.mainImage} alt={screen.mainImageAlt} id="main-standard"></img>
                </Row>
                <h2 id="desc">{screen.mainImageDescription}</h2>
                <Row class="images" id="images">
                    {screen.subImages.map(i =>
                        <Col key={i.image}>
                            <img src={i.image} alt={i.alt} ></img>
                        </Col>
                    )}
                </Row>

                <div class="separator"></div>
                
            </Container>
            )

        );
    }
    return (
        <>
            <Container>
                {displayScreenInfo()}
            </Container>
        </>
    );
}

export default Screens;
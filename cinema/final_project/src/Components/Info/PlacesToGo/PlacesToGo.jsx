import { Card, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./PlacesToGo.css";
import { getPlaces } from '../../../Services/placesService';

const PlacesToGo = () => {

  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    getPlaces().then((places) => {
      setPlaceData(places);
    });
  }, []);

  const displayCards = () => {
    return placeData.map((place) => (
      <Card style={{ width: "18rem", margin: "1%" }} key={place.id}>
        <Card.Img variant='top' src={place.image} style={{height:'180px'}} />
        <Card.Body className='places-card'>
          <Card.Title style={{ color: "black" }}>{place.name}</Card.Title>
          <Card.Subtitle style={{ marginBottom: "15px", color: "black" }}>
            <small>{place.type}</small>
          </Card.Subtitle>
          <Card.Text>{place.description}</Card.Text>
          <Card.Text>
            <small>Offers: {place.offers}</small>
          </Card.Text>
          <Card.Text>
            <small>Address: {place.address}</small>
          </Card.Text>
          <Card.Text>
            <small>Contact: {place.phone}</small>
          </Card.Text>
          <Button className='btn-orange' href={place.website}>Check it out</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div className='places-to-go-content places-to-go'>
      <Row className=''>
        <h1 className='places-to-go'>Places To Go</h1>
        <p>
          Below are a selection of places nearby the venue that you can visit.
        </p>
        <p>Check out the offers that they provide for cinema patrons.</p>
        {displayCards()}
      </Row>
    </div>
  );
};

export default PlacesToGo;

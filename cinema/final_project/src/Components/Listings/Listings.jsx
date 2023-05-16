import "./listings.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilms } from "../../Services/filmsCalls.js";
import Spinner from "react-bootstrap/Spinner";

const Listings = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      setFilmData(films);
    });
  }, []);

  if (filmData === undefined) {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          All Cinema Listings
        </h1>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          All Cinema Listings
        </h1>
        <div id='container'>
          {filmData.map((film) => {
            return (
              <Card id='cards' key={film._id}>
                <div id='singlecard'>
                  <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
                    {film.title}
                  </Card.Title>
                  <div id='data'>
                    <Card.Text>{film.description}</Card.Text>
                    <Card.Text>Rating: {film.rating}</Card.Text>
                    <Card.Text>Runtime: {film.runtime} minutes</Card.Text>
                    <Card.Text>Cast: {film.cast}</Card.Text>
                    <Link to={"/purchasetickets/" + film._id}>
                      <Button className='button'>
                        See all Times and Purchase tickets
                      </Button>
                    </Link>
                  </div>
                  <div id='poster'>
                    <img src={film.filmPoster} alt='film posters' id="poster-image"/>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
};
export default Listings;

import "./listings.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilms } from "../../Services/filmsService";
import Spinner from "react-bootstrap/Spinner";
import StaticStarRating from "../Discussion/StaticStarRating";

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
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>All Cinema Listings</h1>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "10px" }} className='listings-title'>
          All Cinema Listings
        </h1>

        <div id='container'>
          {filmData.map((film) => {
            const avgRating = film.userRating.quantity === 0 ? 0 : film.userRating.aggregate / film.userRating.quantity;
            return (
              <Card id='cards' key={film._id}>
                <div id='singlecard'>
                  <Card.Title style={{ textAlign: "center", fontSize: "35px" }}>
                    <img
                      src={film.classificationURL}
                      alt={`${film.classification} rating icon`}
                      style={{ float: "left", height: "30px" }}
                    />
                    {film.title}
                  </Card.Title>

                  <div id='data' style={{ padding: "5px" }}>
                    <Card.Text>{film.description}</Card.Text>
                    <Card.Text>Duration: {film.runtime} minutes</Card.Text>
                    <Card.Text>Cast: {film.cast}</Card.Text>
                    <Card.Text>Director: {film.director}</Card.Text>
                    <p>
                      Audience Rating: <StaticStarRating rating={avgRating} />
                    </p>
                    <Link to={"/purchasetickets/" + film._id}>
                      <Button className='button'>See all Times and Purchase tickets</Button>
                    </Link>
                  </div>
                  <div id='poster'>
                    <img src={film.filmPoster} alt='film posters' id='poster-image' />
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

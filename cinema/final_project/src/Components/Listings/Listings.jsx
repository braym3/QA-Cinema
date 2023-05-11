import "./listings.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilms } from "../../ApiCalls";

const Listings = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      setFilmData(films);
    });
  }, []);

  return (
    <div id="container">
      {filmData.map((film) => {
        return (
          <Card id="cards">
            <div id="singlecard">
              <div id="data">
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>Synopsis: {film.description}</Card.Text>
                <Card.Text>Rating: {film.rating}</Card.Text>
                <Card.Text>Runtime: {film.runtime} minutes</Card.Text>
                <Card.Text>Cast: {film.cast}</Card.Text>
              </div>
              <div id="poster">
                <img src={film.filmPoster} alt="film posters" />
              </div>
              <Link to={"/purchasetickets/" + film._id}>
                <Button
                  className="button"
                  style={{
                    float: "right",
                    marginRight: "-165px",
                    marginTop: "1%",
                  }}
                >
                  See all Times and Purchase tickets
                </Button>
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Listings;

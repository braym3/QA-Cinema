import "./listings.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
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
            <Card.Title>{film.title}</Card.Title>
            <Card.Text>Rating: {film.rating}</Card.Text>
            <Card.Text>Runtime: {film.runtime}</Card.Text>
            <Card.Text>Synopsis: {film.description}</Card.Text>
            <Card.Text>Cast: {film.cast}</Card.Text>
            <img src={film.filmPoster} alt="film posters"/>
            <Link to="/purchasetickets">
            <Button className="button">See all Times and Purchase tickets</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default Listings;

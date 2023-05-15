import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { getFilmByID } from "../../Services/filmsCalls";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const SingleFilm = () => {
  const { filmID } = useParams();
  const [filmData, setFilmData] = useState();

  useEffect(() => {
    getFilmByID(filmID).then((film) => {
      setFilmData(film);
    });
  }, [filmID]);

  if (filmData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Card id='card'>
        <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
          {filmData.title}
        </Card.Title>
        <div id='singlecard'>
          <div id='data'>
            <Card.Text>Synopsis: {filmData.description}</Card.Text>
            <Card.Text>Rating: {filmData.rating}</Card.Text>
            <Card.Text>Runtime: {filmData.runtime}</Card.Text>
            <Card.Text>Cast: {filmData.cast}</Card.Text>
          </div>
          <div id='poster'>
            <img src={filmData.filmPoster} alt='film posters' />
          </div>
        </div>
      </Card>
    );
  }
};

export default SingleFilm;

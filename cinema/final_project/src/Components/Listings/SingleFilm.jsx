import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { getFilmByID } from "../../ApiCalls";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const SingleFilm = ({ setFilmData, filmData }) => {
  const { filmID } = useParams();

  useEffect(() => {
    getFilmByID(filmID).then((film) => {
      setFilmData(film);
    });
  }, [filmID, setFilmData]);

  if (filmData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Card id='cards'>
        <div id='singlecard'>
          <div id='data'>
            <Card.Title>{filmData.title}</Card.Title>
            <Card.Text>Synopsis: {filmData.description}</Card.Text>
            <Card.Text>Rating: {filmData.rating}</Card.Text>
            <Card.Text>Runtime: {filmData.runtime} minutes</Card.Text>
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

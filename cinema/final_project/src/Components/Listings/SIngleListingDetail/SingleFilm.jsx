import Card from "react-bootstrap/Card";

const SingleFilm = ({ singleFilmData }) => {
  return (
    <>
      <>
        <Card id='card'>
          <div id='singlecard'>
            <div id='data'>
              <Card.Text>Synopsis: {singleFilmData.description}</Card.Text>
              <Card.Text>Rating: {singleFilmData.rating}</Card.Text>
              <Card.Text>Runtime: {singleFilmData.runtime}</Card.Text>
              <Card.Text>Cast: {singleFilmData.cast}</Card.Text>
            </div>
            <div id='poster'>
              <img src={singleFilmData.filmPoster} alt='film posters' />
            </div>
          </div>
        </Card>
      </>
    </>
  );
};

export default SingleFilm;

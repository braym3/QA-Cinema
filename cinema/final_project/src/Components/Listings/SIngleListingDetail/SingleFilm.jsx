import Card from "react-bootstrap/Card";

const SingleFilm = ({ singleFilmData }) => {
  return (
    <>
      <>
        <Card id='card'>
          <div id='singlecard'>
            <div id='data'>
              <Card.Text>{singleFilmData.description}</Card.Text>
              <Card.Text>Duration: {singleFilmData.runtime}</Card.Text>
              <Card.Text>Cast: {singleFilmData.cast}</Card.Text>
              <Card.Text>Director: {singleFilmData.director}</Card.Text>
            </div>
            <div id='poster'>
              <img id='poster-image' src={singleFilmData.filmPoster} alt='film posters' />
            </div>
          </div>
        </Card>
      </>
    </>
  );
};

export default SingleFilm;
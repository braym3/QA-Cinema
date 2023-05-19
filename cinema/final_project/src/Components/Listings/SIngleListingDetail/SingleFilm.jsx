import Card from "react-bootstrap/Card";
import StaticStarRating from "../../Discussion/StaticStarRating";

const SingleFilm = ({ singleFilmData }) => {
  const avgRating =
    singleFilmData.userRating.quantity === 0
      ? 0
      : singleFilmData.userRating.aggregate / singleFilmData.userRating.quantity;
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
              <p>
                Audience Rating: <StaticStarRating rating={avgRating} />
              </p>
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

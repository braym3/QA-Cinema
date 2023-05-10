import Card from "react-bootstrap/Card";

const SingleFilm = () => {
  const film = {
    title: "Hot Fuzz",
    description:
      "A skilled London police officer, after irritating superiors with his embarrassing effectiveness, is transferred to a village where the easygoing officers object to his fervor for regulations, as a string of grisly murders strikes ...",
    runtime: 121,
    rating: "R",
    filmPoster:
      "https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    releaseDate: "2007",
    director: "Edgar Wright",
    cast: "Simon Pegg, Nick Frost, Martin Freeman",
    __v: 0,
  };

  return (
    <Card id='cards'>
      <div id='singlecard'>
        <div id='data'>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>Rating: {film.rating}</Card.Text>
          <Card.Text>Runtime: {film.runtime}</Card.Text>
          <Card.Text>Synopsis: {film.description}</Card.Text>
          <Card.Text>Cast: {film.cast}</Card.Text>
        </div>
        <div id='poster'>
          <img src={film.filmPoster} alt='film posters' />
        </div>
      </div>
    </Card>
  );
};

export default SingleFilm;

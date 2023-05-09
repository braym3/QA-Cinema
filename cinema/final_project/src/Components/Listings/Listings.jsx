import "./listings.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"

const Listings = () => {
  const dummyData = [
    {
      title: "Avengers",
      rating: 18,
      runtime: 120,
      description: "hulk, thor, tony stark",
      cast: ["mark ruffalo ", "robert downey jr ", "chris hemsworth "],
    },
    {
        title: "Avengers",
        rating: 18,
        runtime: 120,
        description: "hulk, thor, tony stark",
        cast: ["mark ruffalo", "robert downey jr", "chris hemsworth"],
      },
      {
        title: "Avengers",
        rating: 18,
        runtime: 120,
        description: "hulk, thor, tony stark",
        cast: ["mark ruffalo", "robert downey jr", "chris hemsworth"],
      },
      {
        title: "Avengers",
        rating: 18,
        runtime: 120,
        description: "hulk, thor, tony stark",
        cast: ["mark ruffalo", "robert downey jr", "chris hemsworth"],
      },
  ];

  return (
    <div id="container">
      {dummyData.map((film) => {
        return (
          <Card id="cards">
            <Card.Title>{film.title}</Card.Title>
            <Card.Text>Rating: {film.rating}</Card.Text>
            <Card.Text>Runtime: {film.runtime}</Card.Text>
            <Card.Text>Synopsis: {film.description}</Card.Text>
            <Card.Text>Cast: {film.cast}</Card.Text>
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

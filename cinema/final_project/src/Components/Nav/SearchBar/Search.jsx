import React, { useState, useEffect } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { getFilms } from "../../../Services/filmsService";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      setFilmData(films);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const displayResults = () => {
    if (searchInput.length > 0) {
      return filmData
        .filter((f) => f?.title?.toLowerCase().startsWith(searchInput.toLowerCase()))
        .map((film, i) => (
          <ListGroup.Item key={i} action href={"/purchasetickets/" + film._id} className='result-item'>
            {film.title}
          </ListGroup.Item>
        ));
    }
  };

  return (
    <div className='searchbar-form'>
      <Form.Control
        type='search'
        placeholder='Search for a film'
        className='me-2'
        aria-label='Search'
        onChange={handleChange}
        value={searchInput}
      />
      <ListGroup className='film-results'>{displayResults()}</ListGroup>
    </div>
  );
};

export default Search;

import axios from "axios";

const filmsAPI = axios.create({
  baseURL: "http://localhost:4494/films/",
});

export const getFilms = async () => {
  try {
    const { data } = await filmsAPI.get("/getAll");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getFilmByID = async (filmID) => {
  try {
    const { data } = await filmsAPI.get(`/getFilm/${filmID}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const addRating = async (filmId, rating) => {
  try {
    // debugger;
    const { data } = await filmsAPI.patch("addRating/" + filmId, rating);
    return data;
  } catch (err) {
    console.error(err);
  }
};

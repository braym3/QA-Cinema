import axios from "axios";

const filmsAPI = axios.create({
  baseURL: "http://localhost:4494/films/",
});

export const getFilms = async () => {
  try {
    const { data } = await filmsAPI.get("/getAll");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getFilmByID = async (filmID) => {
  try {
    const { data } = await filmsAPI.get(`/getFilm/${filmID}`);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

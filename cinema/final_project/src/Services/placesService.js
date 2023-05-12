import axios from "axios";

const placesAPI = axios.create({
  baseURL: "http://localhost:4494/places/",
});

export const getPlaces = async () => {
  try {
    const { data } = await placesAPI.get("/getAll");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getPlaceByID = async (placeID) => {
  try {
    const { data } = await placesAPI.get(`/getPlace/${placeID}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
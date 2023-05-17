import axios from "axios";

const screensAPI = axios.create({
  baseURL: "http://localhost:4494/screens/",
});

export const getScreens = async () => {
  try {
    const { data } = await screensAPI.get("/getAll");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getScreenByID = async (screenID) => {
  try {
    const { data } = await screensAPI.get(`/getScreen/${screenID}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
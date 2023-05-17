import axios from "axios";

const classificationsAPI = axios.create({
  baseURL: "http://localhost:4494/classifications/",
});

export const getClassifications = async () => {
  try {
    const { data } = await classificationsAPI.get("/getAll");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getClassificationByID = async (classificationID) => {
  try {
    const { data } = await classificationsAPI.get(`/getClassification/${classificationID}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
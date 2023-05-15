import axios from "axios";

const newReleasesAPI = axios.create({
  baseURL: "http://localhost:4494/newreleases/",
});

export const getNewReleases = async () => {
  try {
    const { data } = await newReleasesAPI.get("/getAll");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getNewReleaseByID = async (newReleaseID) => {
  try {
    const { data } = await newReleasesAPI.get(`/getNewRelease/${newReleaseID}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
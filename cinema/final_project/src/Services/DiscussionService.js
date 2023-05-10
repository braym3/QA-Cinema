import axios from "axios";

const discussionsAPI = axios.create({
  baseURL: "http://localhost:4494/discussions/",
});

export const getDiscussions = async () => {
  try {
    const { data } = await discussionsAPI.get("getAll");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

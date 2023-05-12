import axios from "axios";

const formsApi = axios.create({
  baseURL: "http://localhost:4494/emailform/",
});

export const postEmailForm = (newFormSubmission) => {
  return formsApi
    .post("create", newFormSubmission)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

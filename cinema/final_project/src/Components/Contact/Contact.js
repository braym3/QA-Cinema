import axios from 'axios';

const formsApi = axios.create({
    baseURL: "http://localhost:4494/emailform/",
  });

export const postEmailForm = (userID, newFormSubmission ) => {
    return formsApi
    .post(`url`, {
        subject: "",
        emailaddress: "",
        message: "",
    }).then((response) => {
            return response.data
    })

}
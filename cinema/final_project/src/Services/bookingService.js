import axios from "axios";

const bookingsAPI = axios.create({
  baseURL: "http://localhost:4494/bookings/",
});

export const createBooking = async (booking) => {
  try {
    const { data } = await bookingsAPI.post("/createBooking", booking);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getBooking = async () => {
  try {
    const { data } = await bookingsAPI.get("/getBooking");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateBooking = async (bookingID, status) => {
  try {
    const { data } = await bookingsAPI.patch("updateBooking/" + bookingID, status);
    return data;
  } catch (err) {
    console.error(err);
  }
};

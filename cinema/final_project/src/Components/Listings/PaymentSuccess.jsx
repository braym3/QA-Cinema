import { useEffect, useState } from "react";
import { getBooking, updateBooking } from "../../Services/bookingService";
import { Spinner } from "react-bootstrap";
const PaymentSuccess = () => {
  const [bookingData, setBookingData] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    getBooking()
      .then((res) => {
        setBookingData(res[res.length - 1]);
        setId(res[res.length - 1]._id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id) {
      console.log(id, "in use effect");
      updateBooking(id, { status: "success" })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
  });

  if (bookingData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Payment Success</h1>
        <p>Congrats {bookingData.bookerName}!!</p>
        <p>
          You're going to see {bookingData.title} @ {bookingData.time} on {bookingData.date}
        </p>
        <p>
          Total: £{bookingData.price} for {bookingData.numOfTickets} tickets
        </p>
        <p>
          If you need any assistance here is your booking id {bookingData._id}, please reach out to us via the contact
          page.
        </p>
      </div>
    );
  }
};

export default PaymentSuccess;
